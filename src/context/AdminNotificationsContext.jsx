import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { getAdminNotifications } from '../api/data';
import { useAdminPendingCounts } from './AdminPendingCountsContext';

const AdminNotificationsContext = createContext(null);

function isAdminUser() {
  return localStorage.getItem('user_type') === 'admin' && !!localStorage.getItem('token');
}

const LS_LAST_SEEN = 'admin_notifications_last_seen_id';

/** إشعارات شريط النظام (PWA / Chrome) — لا تعمل في الخلفية بدون Web Push؛ هنا عند وصول دفعات جديدة أثناء فتح التطبيق */
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
    /* يُكمل إلى Notification */
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
      /* تجاهل */
    }
  }
}

export function AdminNotificationsProvider({ children }) {
  const { refresh: refreshPending } = useAdminPendingCounts();
  const [items, setItems] = useState([]);
  const [latestId, setLatestId] = useState(0);
  const [polling, setPolling] = useState(false);
  const lastSeenId = useRef(Number(localStorage.getItem(LS_LAST_SEEN) || 0));
  /** أول استطلاع لا نُظهر عليه إشعارات نظام (تجنب إغراق المستخدم بتاريخ قديم) */
  const adminPollCountRef = useRef(0);

  const unreadCount = useMemo(() => {
    const seen = lastSeenId.current || 0;
    return items.filter((x) => Number(x.id) > seen).length;
  }, [items]);

  const markAllRead = useCallback(() => {
    lastSeenId.current = latestId || lastSeenId.current || 0;
    localStorage.setItem(LS_LAST_SEEN, String(lastSeenId.current || 0));
    // force rerender
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
        setItems((prev) => {
          const merged = [...prev, ...list];
          // keep last 120
          return merged.slice(-120);
        });
        // تحديث عدادات السايدبار تلقائياً
        refreshPending?.();
        if (adminPollCountRef.current > 1) {
          void emitAdminSystemNotifications(list);
        }
      }
      setLatestId(newLatest);
    } catch {
      // ignore
    } finally {
      setPolling(false);
    }
  }, [latestId, refreshPending]);

  useEffect(() => {
    if (!isAdminUser()) return;
    let alive = true;
    // initial
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

