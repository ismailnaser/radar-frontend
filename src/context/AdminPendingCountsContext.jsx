import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAdminPendingCounts } from '../api/data';

const AdminPendingCountsContext = createContext({
  pendingAds: 0,
  pendingRenewals: 0,
  pendingCommunityPoints: 0,
  pendingTotal: 0,
  refresh: async () => {},
  loading: false,
});

export function useAdminPendingCounts() {
  return useContext(AdminPendingCountsContext);
}

export function AdminPendingCountsProvider({ children }) {
  const { pathname } = useLocation();
  const [pendingAds, setPendingAds] = useState(0);
  const [pendingRenewals, setPendingRenewals] = useState(0);
  const [pendingCommunityPoints, setPendingCommunityPoints] = useState(0);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (localStorage.getItem('user_type') !== 'admin' || !localStorage.getItem('token')) {
      setPendingAds(0);
      setPendingRenewals(0);
      setPendingCommunityPoints(0);
      return;
    }
    setLoading(true);
    try {
      const d = await getAdminPendingCounts();
      setPendingAds(Number(d?.pending_ads) || 0);
      setPendingRenewals(Number(d?.pending_renewals) || 0);
      setPendingCommunityPoints(Number(d?.pending_community_points) || 0);
    } catch {
      setPendingAds(0);
      setPendingRenewals(0);
      setPendingCommunityPoints(0);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user_type') !== 'admin' || !localStorage.getItem('token')) {
      setPendingAds(0);
      setPendingRenewals(0);
      setPendingCommunityPoints(0);
      return;
    }
    refresh();
  }, [pathname, refresh]);

  useEffect(() => {
    const onVis = () => {
      if (
        document.visibilityState === 'visible' &&
        localStorage.getItem('user_type') === 'admin' &&
        localStorage.getItem('token')
      ) {
        refresh();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [refresh]);

  const value = useMemo(
    () => ({
      pendingAds,
      pendingRenewals,
      pendingCommunityPoints,
      pendingTotal: pendingAds + pendingRenewals + pendingCommunityPoints,
      refresh,
      loading,
    }),
    [pendingAds, pendingRenewals, pendingCommunityPoints, refresh, loading]
  );

  return <AdminPendingCountsContext.Provider value={value}>{children}</AdminPendingCountsContext.Provider>;
}
