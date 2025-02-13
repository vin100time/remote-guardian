
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

interface Site {
  name: string;
  coordinates: [number, number];
  status: 'online' | 'offline' | 'warning';
}

const SitesMap = () => {
  const sites: Site[] = [
    { name: "Site Paris Centre", coordinates: [48.8566, 2.3522], status: 'online' },
    { name: "Site Lyon Sud", coordinates: [45.7640, 4.8357], status: 'online' },
    { name: "Site Marseille Port", coordinates: [43.2965, 5.3698], status: 'offline' },
    { name: "Site Bordeaux Nord", coordinates: [44.8378, 0.5792], status: 'online' },
    { name: "Site Lille Centre", coordinates: [50.6292, 3.0573], status: 'online' },
    { name: "Site Nantes Est", coordinates: [47.2184, -1.5534], status: 'warning' }
  ];

  useEffect(() => {
    // Fix for the default icon markers
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconRetina,
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
  }, []);

  const getMarkerIcon = (status: Site['status']) => {
    const markerHtmlStyles = `
      background-color: ${
        status === 'online' ? '#22c55e' :
        status === 'offline' ? '#ef4444' : '#f59e0b'
      };
      width: 2rem;
      height: 2rem;
      display: block;
      position: relative;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;

    return L.divIcon({
      className: 'custom-pin',
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
      html: `<span style="${markerHtmlStyles}" />`
    });
  };

  return (
    <div style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}>
      <MapContainer 
        center={[46.8566, 2.3522]} 
        zoom={6} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attributionControl={true}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {sites.map((site, index) => (
          <Marker 
            key={index}
            position={site.coordinates}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{site.name}</h3>
                <p className="text-sm text-gray-600">
                  Statut: {
                    site.status === 'online' ? 'En ligne' :
                    site.status === 'offline' ? 'Hors ligne' : 'Attention'
                  }
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SitesMap;
