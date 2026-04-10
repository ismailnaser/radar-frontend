import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { getAdminNotifications } from '../api/data';
import { useAdminPendingCounts } from './AdminPendingCountsContext';

const AdminNotificationsContext = createContext(null);

function isAdminUser() {
  return localStorage.getItem('user_type') === 'admin' && !!localStorage.getItem('token');
}

const LS_LAST_SEEN = 'admin_notifications_last_seen_id';

export function AdminNotificationsProvider({ children }) {
  const { refresh: refreshPending } = useAdminPendingCounts();
  const [items, setItems] = useState([]);
  const [latestId, setLatestId] = useState(0);
  const [polling, setPolling] = useState(false);
  const lastSeenId = useRef(Number(localStorage.getItem(LS_LAST_SEEN) || 0));

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
      if (list.length) {
        setItems((prev) => {
          const merged = [...prev, ...list];
          // keep last 120
          return merged.slice(-120);
        });
        // تحديث عدادات السايدبار تلقائياً
        refreshPending?.();
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

