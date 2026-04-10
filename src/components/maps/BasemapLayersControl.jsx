import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';

/**
 * طبقات خلفية لخرائط قطاع غزة — بيانات من OpenStreetMap ومزوّدين مجانيين.
 * المستخدم يقدر يبدّل من زر الطبقات أعلى اليمين لرؤية شوارع ومعالم أوضح.
 */
export default function BasemapLayersControl() {
  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="شوارع وتفاصيل (OSM)">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          maxNativeZoom={19}
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="طرق أوضح (Carto Voyager)">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom={20}
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="معالم وشبكة طرق (Esri)">
        <TileLayer
          attribution="Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19}
        />
      </LayersControl.BaseLayer>
    </LayersControl>
  );
}
