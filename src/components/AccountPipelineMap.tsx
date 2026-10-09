import React, { useEffect, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { PipelineAccount, PIPELINE_STAGES } from '../data/pipelineModelData';
import { useTheme } from '../context/ThemeContext';
import { Layers, Satellite } from 'lucide-react';

// Custom MapController to fly to selected account or fit bounds
const MapController: React.FC<{ selectedCoords?: [number, number] }> = ({ selectedCoords }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCoords) {
      map.setView(selectedCoords, 12, { animate: true });
    }
  }, [selectedCoords, map]);

  return null;
};

// MapResizer to guarantee Leaflet recalculates size on tab switch and doesn't render gray/missing tiles
const MapResizer: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    // Invalidate size immediately, and at staggered intervals to accommodate DOM transitions
    map.invalidateSize();
    const t1 = setTimeout(() => map.invalidateSize(), 150);
    const t2 = setTimeout(() => map.invalidateSize(), 500);

    const handleResize = () => map.invalidateSize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);

  return null;
};

// Known coordinates for Indonesian cities & enterprise account locations
export const ACCOUNT_COORDINATES: Record<string, [number, number]> = {
  // Jakarta Financial & Tech Districts
  bca: [-6.1953, 106.8228], // Menara BCA Grand Indonesia
  mandiri: [-6.2268, 106.8085], // Plaza Mandiri Gatot Subroto
  telkomsel: [-6.2307, 106.8188], // Telkom Landmark Tower Gatot Subroto
  jago: [-6.2238, 106.8286], // Menara BTPN / Mega Kuningan
  dana: [-6.2255, 106.8242], // Capital Place Gatot Subroto
  bri: [-6.2166, 106.8143], // Gedung BRI Sudirman
  bni: [-6.2023, 106.8205], // Grha BNI 46 Sudirman
  indosat: [-6.1772, 106.8236], // Kantor Pusat Indosat Medan Merdeka Barat
  pln: [-6.2415, 106.8002], // Kantor Pusat PLN Trunojoyo Blok M
  tokopedia: [-6.2198, 106.8217], // Tokopedia Tower Ciputra World Kuningan
  siloam: [-6.1905, 106.7681], // Siloam Hospitals Kebon Jeruk / Sudirman
  // Regional Hubs
  bank_jatim: [-7.2625, 112.7483], // Basuki Rahmat Surabaya
  pertamina_balikpapan: [-1.2692, 116.8253], // Balikpapan Refinery RU V
  dci_indonesia: [-6.9175, 107.6191], // Bandung / Cibitung Tech corridor
  vale_makassar: [-5.1477, 119.4327], // Makassar South Sulawesi
};

const DEFAULT_JAKARTA_COORDS: [number, number] = [-6.2088, 106.8456];

// Helper to create glowing HTML markers matching stage colors
const createCustomMarkerIcon = (color: string, isSelected: boolean, name: string) => {
  const size = isSelected ? 34 : 26;
  const pulseHtml = isSelected
    ? `<span class="absolute -inset-1.5 rounded-full animate-ping opacity-75" style="background-color: ${color};"></span>`
    : '';

  const html = `
    <div class="relative flex items-center justify-center cursor-pointer group" style="width: ${size}px; height: ${size}px;">
      ${pulseHtml}
      <div 
        class="relative flex items-center justify-center rounded-full text-white font-mono font-bold text-[10px] shadow-lg border-2" 
        style="
          width: ${size}px; 
          height: ${size}px; 
          background: ${color}; 
          border-color: ${isSelected ? '#ffffff' : '#0a0a0f'};
          box-shadow: 0 0 ${isSelected ? '16px' : '8px'} ${color}cc;
        "
      >
        <span class="truncate max-w-[22px]">${name.charAt(0)}</span>
      </div>
    </div>
  `;

  return L.divIcon({
    html,
    className: 'custom-account-marker',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4]
  });
};

export type MapLayerType = 'esri_satellite' | 'clean_map';

interface AccountPipelineMapProps {
  accounts: PipelineAccount[];
  selectedAccountId: string;
  onSelectAccount: (id: string) => void;
  isId: boolean;
  stageLabelMap: Record<string, string>;
}

export const AccountPipelineMap: React.FC<AccountPipelineMapProps> = ({
  accounts,
  selectedAccountId,
  onSelectAccount,
  isId,
  stageLabelMap
}) => {
  const { theme } = useTheme();
  const [activeLayer, setActiveLayer] = useState<MapLayerType>('clean_map');

  const selectedAccount = accounts.find(a => a.id === selectedAccountId);
  const selectedCoords = selectedAccount && ACCOUNT_COORDINATES[selectedAccount.id]
    ? ACCOUNT_COORDINATES[selectedAccount.id]
    : undefined;

  // Dedicated CORS Handler & Tile Error Fallback
  const handleTileError = useCallback((e: L.TileErrorEvent) => {
    const target = e.tile as HTMLImageElement;
    if (!target || target.dataset.corsFallbackApplied) return;
    target.dataset.corsFallbackApplied = 'true';

    const { x, y, z } = e.coords;
    if (activeLayer === 'esri_satellite') {
      target.src = `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/${z}/${y}/${x}`;
    }
  }, [activeLayer]);

  // Basemaps Configuration: Esri Satelit & Maps Biasa Leaflet (Canvas Base)
  const layerConfig: Record<MapLayerType, {
    url: string;
    subdomains: string[];
    maxZoom: number;
    attribution: string;
    title: string;
  }> = {
    esri_satellite: {
      // Esri World Imagery (Satelit)
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      subdomains: ['server'],
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri World Imagery',
      title: isId ? 'Esri Satelit' : 'Esri Satellite'
    },
    clean_map: {
      // Leaflet Canvas Base (Maps Biasa tanpa clutter)
      url: theme === 'light'
        ? 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        : 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      subdomains: ['server'],
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri Canvas',
      title: isId ? 'Maps Biasa' : 'Standard Map'
    }
  };

  const currentLayer = layerConfig[activeLayer];

  return (
    <div className="relative w-full h-full min-h-[260px] rounded-lg overflow-hidden border border-neutral-800 shadow-md">
      {/* Top Map Toolbar: Mode Switcher (Icon Only) */}
      <div className="absolute top-2.5 right-2.5 z-[1000] flex items-center gap-1 bg-[#0b0c12]/95 backdrop-blur-md p-1 rounded-md border border-neutral-800 shadow-xl">
        <button
          type="button"
          onClick={() => setActiveLayer('esri_satellite')}
          className={`flex items-center justify-center p-1.5 rounded transition-colors cursor-pointer ${
            activeLayer === 'esri_satellite'
              ? 'bg-rose-600 text-white shadow-[0_0_8px_rgba(225,29,72,0.4)]'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
          title={isId ? 'Esri Satelit' : 'Esri Satellite'}
          aria-label={isId ? 'Esri Satelit' : 'Esri Satellite'}
        >
          <Satellite className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setActiveLayer('clean_map')}
          className={`flex items-center justify-center p-1.5 rounded transition-colors cursor-pointer ${
            activeLayer === 'clean_map'
              ? 'bg-rose-600 text-white shadow-[0_0_8px_rgba(225,29,72,0.4)]'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
          }`}
          title={isId ? 'Maps Biasa' : 'Standard Map'}
          aria-label={isId ? 'Maps Biasa' : 'Standard Map'}
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>

      <MapContainer
        center={[-6.22, 106.82]}
        zoom={11}
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={true}
      >
        {/* Active Tile Layer with CORS handler & error recovery */}
        {/* Note: In standard browser DOM, omitting crossOrigin prevents strict cross-origin blocking on tile assets */}
        <TileLayer
          key={`${activeLayer}-${theme}`}
          url={currentLayer.url}
          subdomains={currentLayer.subdomains}
          maxZoom={currentLayer.maxZoom}
          attribution={currentLayer.attribution}
          eventHandlers={{
            tileerror: handleTileError
          }}
        />

        {/* Automatic resizer & coordinate controller */}
        <MapResizer />
        <MapController selectedCoords={selectedCoords} />

        {/* Account Markers */}
        {accounts.map(acc => {
          const coords = ACCOUNT_COORDINATES[acc.id] || DEFAULT_JAKARTA_COORDS;
          const isSelected = acc.id === selectedAccountId;
          const stageConfig = PIPELINE_STAGES.find(s => s.key === acc.stage);
          const color = stageConfig ? stageConfig.stageColor : '#e11d48';

          const markerIcon = createCustomMarkerIcon(
            color, 
            isSelected, 
            acc.shortName || acc.name.replace(/^PT\s+/i, '')
          );

          return (
            <Marker
              key={acc.id}
              position={coords}
              icon={markerIcon}
              eventHandlers={{
                click: () => onSelectAccount(acc.id)
              }}
            >
              <Popup>
                <div className="p-2 space-y-1 font-sans text-xs min-w-[210px] bg-neutral-950/95 text-white rounded border border-neutral-800 shadow-xl">
                  <div className="flex items-center justify-between border-b border-neutral-700 pb-1">
                    <span className="text-[10px] font-mono uppercase font-bold" style={{ color }}>
                      {stageLabelMap[acc.stage] || acc.stage}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {acc.compositeScore}/100
                    </span>
                  </div>
                  <div className="font-bold text-white text-xs pt-0.5">{acc.name}</div>
                  <div className="text-[10px] font-mono text-neutral-300 flex justify-between">
                    <span>{acc.city}</span>
                    <span className="text-emerald-400 font-bold">
                      {isId ? `Rp ${acc.dealValueIdrMillions} Jt` : `IDR ${acc.dealValueIdrMillions}M`}
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-300 pt-1 line-clamp-2 leading-tight">
                    {acc.useCase}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectAccount(acc.id)}
                    className="w-full mt-1.5 py-1 text-[10px] font-mono font-bold bg-rose-600 hover:bg-rose-500 text-white rounded transition-colors cursor-pointer"
                  >
                    {isId ? 'Pilih Akun Ini' : 'Select Account'}
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
