import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { getAdminNotifications } from '../api/data';
import { useAdminPendingCounts } from './AdminPendingCountsContext';
import { subscribeAdminWebPush } from '../utils/webPush';

const AdminNotificationsContext = createContext(null);

function isAdminUser() {
  return localStorage.getItem('user_type') === 'admin' && !!localStorage.getItem('token');
}

const LS_LAST_SEEN = 'admin_notifications_last_seen_id';

/** إشعارات النظام أثناء فتح التطبيق (fallback لو ما وصل push). */
async function emitAdminSystemNotifications(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return;
  if (typeof window === 'undefined') return;
  const icon = '/logo.png';
  const baseOpts = { icon, badge: icon, lang: 'ar', dir: 'rtl' };
  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg?.showNotification) {
        for (const n of rows) {
          await reg.showNotification(n.title || 'رادار — إدارة', {
            body: n.body || '',
            tag: `admin-notif-${n.id}`,
            ...baseOpts,
          });
        }
        return;
      }
    }
  } catch {
    // fallback to Notification API
  }
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
  for (const n of rows) {
    try {
      new Notification(n.title || 'رادار — إدارة', {
        body: n.body || '',
        icon,
        tag: `admin-notif-${n.id}`,
      });
    } catch {
      // ignore
    }
  }
}

export function AdminNotificationsProvider({ children }) {
  const { refresh: refreshPending } = useAdminPendingCounts();
  const [items, setItems] = useState([]);
  const [latestId, setLatestId] = useState(0);
  const [polling, setPolling] = useState(false);
  const lastSeenId = useRef(Number(localStorage.getItem(LS_LAST_SEEN) || 0));
  const adminPollCountRef = useRef(0);

  const unreadCount = useMemo(() => {
    const seen = lastSeenId.current || 0;
    return items.filter((x) => Number(x.id) > seen).length;
  }, [items]);

  const markAllRead = useCallback(() => {
    lastSeenId.current = latestId || lastSeenId.current || 0;
    localStorage.setItem(LS_LAST_SEEN, String(lastSeenId.current || 0));
    setItems((prev) => [...prev]);
  }, [latestId]);

  const pollOnce = useCallback(async () => {
    if (!isAdminUser()) return;
    setPolling(true);
    try {
      const since = latestId || null;
      const res = await getAdminNotifications(since);
      const list = Array.isArray(res?.results) ? res.results : [];
      const newLatest = Number(res?.latest_id || 0) || latestId || 0;
      adminPollCountRef.current += 1;
      if (list.length) {
        setItems((prev) => [...prev, ...list].slice(-120));
        refreshPending?.();
        if (adminPollCountRef.current > 1) {
          void emitAdminSystemNotifications(list);
        }
      }
      setLatestId(newLatest);
    } finally {
      setPolling(false);
    }
  }, [latestId, refreshPending]);

  useEffect(() => {
    if (!isAdminUser()) return undefined;
    subscribeAdminWebPush().catch(() => {});
    let alive = true;
    pollOnce();
    const t = window.setInterval(() => {
      if (!alive) return;
      pollOnce();
    }, 8000);
    return () => {
      alive = false;
      window.clearInterval(t);
    };
  }, [pollOnce]);

  const value = useMemo(
    () => ({
      items,
      unreadCount,
      latestId,
      polling,
      markAllRead,
      pollOnce,
      lastSeenId: lastSeenId.current,
    }),
    [items, unreadCount, latestId, polling, markAllRead, pollOnce],
  );

  return <AdminNotificationsContext.Provider value={value}>{children}</AdminNotificationsContext.Provider>;
}

export function useAdminNotifications() {
  return useContext(AdminNotificationsContext);
}
