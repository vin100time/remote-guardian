
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Site {
  name: string;
  coordinates: [number, number];
  status: 'online' | 'offline' | 'warning';
}

const SitesMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxKey, setMapboxKey] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const sites: Site[] = [
    { name: "Site Paris Centre", coordinates: [2.3522, 48.8566], status: 'online' },
    { name: "Site Lyon Sud", coordinates: [4.8357, 45.7640], status: 'online' },
    { name: "Site Marseille Port", coordinates: [5.3698, 43.2965], status: 'offline' },
    { name: "Site Bordeaux Nord", coordinates: [0.5792, 44.8378], status: 'online' },
    { name: "Site Lille Centre", coordinates: [3.0573, 50.6292], status: 'online' },
    { name: "Site Nantes Est", coordinates: [-1.5534, 47.2184], status: 'warning' }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxKey) return;

    // Initialisation de la carte
    mapboxgl.accessToken = mapboxKey;
    
    if (map.current) {
      map.current.remove();
    }

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12', // Changed to streets style for better visibility
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

      setIsMapInitialized(true);
    } catch (error) {
      console.error("Erreur lors de l'initialisation de la carte:", error);
    }
  };

  useEffect(() => {
    if (mapboxKey) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxKey]);

  if (!isMapInitialized) {
    return (
      <div className="p-4 space-y-4">
        <div className="text-sm text-muted-foreground mb-2">
          Pour afficher la carte, veuillez entrer votre clé API Mapbox publique ci-dessous. 
          Vous pouvez l'obtenir sur <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
        </div>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Entrez votre clé API Mapbox publique"
            value={mapboxKey}
            onChange={(e) => setMapboxKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={initializeMap}>Initialiser la carte</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default SitesMap;
