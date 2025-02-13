
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface Site {
  name: string;
  coordinates: [number, number];
  status: 'online' | 'offline' | 'warning';
}

const SitesMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const sites: Site[] = [
    { name: "Site Paris Centre", coordinates: [2.3522, 48.8566], status: 'online' },
    { name: "Site Lyon Sud", coordinates: [4.8357, 45.7640], status: 'online' },
    { name: "Site Marseille Port", coordinates: [5.3698, 43.2965], status: 'offline' },
    { name: "Site Bordeaux Nord", coordinates: [0.5792, 44.8378], status: 'online' },
    { name: "Site Lille Centre", coordinates: [3.0573, 50.6292], status: 'online' },
    { name: "Site Nantes Est", coordinates: [-1.5534, 47.2184], status: 'warning' }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialisation de la carte
    mapboxgl.accessToken = 'VOTRE_CLE_MAPBOX_PUBLIQUE';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.3522, 46.8566], // Centre de la France
      zoom: 5
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Ajout des marqueurs pour chaque site
    sites.forEach(site => {
      const marker = document.createElement('div');
      marker.className = 'site-marker';
      marker.style.width = '20px';
      marker.style.height = '20px';
      marker.style.borderRadius = '50%';
      marker.style.border = '2px solid white';
      marker.style.backgroundColor = 
        site.status === 'online' ? '#22c55e' :
        site.status === 'offline' ? '#ef4444' : '#f59e0b';
      marker.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-semibold">${site.name}</h3>
            <p class="text-sm text-gray-600">Statut: ${
              site.status === 'online' ? 'En ligne' :
              site.status === 'offline' ? 'Hors ligne' : 'Attention'
            }</p>
          </div>
        `);

      new mapboxgl.Marker(marker)
        .setLngLat(site.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default SitesMap;
