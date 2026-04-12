import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { getRefinedGeolocationPosition } from '../utils/geolocation';

const MapExploreContext = createContext(null);

export function MapExploreProvider({ children }) {
  const [userMapLocation, setUserMapLocation] = useState(null);
  const [locating, setLocating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  /** يزيد كلما نجح «موقعي الحالي» لإجبار الخريطة على التمركز من جديد */
  const [locationFocusNonce, setLocationFocusNonce] = useState(0);

  /** يُرجع { lat, lng, accuracyM } أو null — دقة أفضل عبر عدة قراءات GPS وبدون موقع مخزّن قديم (maximumAge 0). */
  const requestUserLocation = useCallback(() => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }
      setLocating(true);
      getRefinedGeolocationPosition({ maxWaitMs: 22000, goodEnoughM: 110 })
        .then((r) => {
          const loc = [r.latitude, r.longitude];
          setUserMapLocation(loc);
          setLocationFocusNonce((n) => n + 1);
          setLocating(false);
          resolve({
            lat: r.latitude,
            lng: r.longitude,
            accuracyM: r.accuracy,
          });
        })
        .catch(() => {
          setLocating(false);
          resolve(null);
        });
    });
  }, []);

  /** نقرة على الخريطة في الرئيسية — يحدد موقع المستخدم يدوياً ويعيد التمركز */
  const setManualMapLocation = useCallback((lat, lng) => {
    const la = Number(lat);
    const ln = Number(lng);
    if (!Number.isFinite(la) || !Number.isFinite(ln)) return;
    setUserMapLocation([la, ln]);
    setLocationFocusNonce((n) => n + 1);
  }, []);

  /** إزالة دبوس «موقعي» من الخريطة وإعادة ضبط التمركز */
  const clearUserMapLocation = useCallback(() => {
    setUserMapLocation(null);
    setLocationFocusNonce(0);
  }, []);

  const value = useMemo(
    () => ({
      userMapLocation,
      setUserMapLocation,
      setManualMapLocation,
      clearUserMapLocation,
      requestUserLocation,
      locating,
      searchQuery,
      setSearchQuery,
      locationFocusNonce,
    }),
    [userMapLocation, requestUserLocation, setManualMapLocation, clearUserMapLocation, locating, searchQuery, locationFocusNonce]
  );

  return <MapExploreContext.Provider value={value}>{children}</MapExploreContext.Provider>;
}

export function useMapExplore() {
  const ctx = useContext(MapExploreContext);
  if (!ctx) {
    throw new Error('useMapExplore must be used within MapExploreProvider');
  }
  return ctx;
}
