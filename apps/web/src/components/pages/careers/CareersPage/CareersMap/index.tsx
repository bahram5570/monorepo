'use client';

import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { CAREER_CONTAINER_MAX_WIDTH } from '@components/pages/careers/constants';
import CustomTypography from '@components/ui/CustomTypography';

import styles from './styles.module.css';

const impoPosition: LatLngTuple = [36.32829, 59.511057];
const customIcon = new L.Icon({
  iconUrl: '/assets/icons/careers/locationMarker.svg',
  iconSize: [60, 60],
});

const CareersMap = () => {
  return (
    <div
      style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH }}
      className="w-full flex flex-col items-center px-6 md:px-4 pt-4 md:pt-10 pb-10 mx-auto"
    >
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'} className="pb-4 md:pb-8">
        دفتر مرکزی ایمپو
      </CustomTypography>

      <div className={`w-full h-[240px] md:h-[260px] rounded-xl overflow-hidden z-0 ${styles.map}`}>
        <MapContainer center={impoPosition} zoom={16} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker position={impoPosition} icon={customIcon} />
        </MapContainer>
      </div>
    </div>
  );
};

export default CareersMap;
