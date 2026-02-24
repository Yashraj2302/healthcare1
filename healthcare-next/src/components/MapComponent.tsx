import { useEffect, useRef, useState } from 'react';
import { MapPin, Map, Loader2 } from 'lucide-react';

interface MapComponentProps {
    latitude: number;
    longitude: number;
    title?: string;
    zoom?: number;
    height?: string;
    showControls?: boolean;
}

declare global {
    interface Window {
        initMap?: () => void;
        initMultiMap?: () => void;
        google?: any;
    }
}

export default function MapComponent({
    latitude,
    longitude,
    title = "Hospital Location",
    zoom = 15,
    height = "400px",
    showControls = true
}: MapComponentProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadGoogleMaps = () => {
            // Check if Google Maps is already loaded
            if (window.google && window.google.maps) {
                initializeMap();
                return;
            }

            // Create script element for Google Maps
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;

            // Set up the callback
            window.initMap = initializeMap;

            script.onerror = () => {
                setError('Failed to load Google Maps. Please check your internet connection.');
            };

            document.head.appendChild(script);
        };

        const initializeMap = () => {
            if (!mapRef.current) return;

            try {
                const map = new window.google.maps.Map(mapRef.current, {
                    center: { lat: latitude, lng: longitude },
                    zoom: zoom,
                    mapTypeControl: showControls,
                    streetViewControl: showControls,
                    fullscreenControl: showControls,
                    zoomControl: showControls,
                    styles: [
                        {
                            featureType: 'poi',
                            elementType: 'labels',
                            stylers: [{ visibility: 'off' }]
                        }
                    ]
                });

                // Add marker
                new window.google.maps.Marker({
                    position: { lat: latitude, lng: longitude },
                    map: map,
                    title: title,
                    icon: {
                        path: window.google.maps.SymbolPath.CIRCLE,
                        scale: 10,
                        fillColor: '#4f46e5',
                        fillOpacity: 1,
                        strokeColor: '#ffffff',
                        strokeWeight: 2
                    }
                });

                setMapLoaded(true);
            } catch (err) {
                setError('Error initializing map. Please try again later.');
            }
        };

        loadGoogleMaps();

        // Cleanup function
        return () => {
            // Note: In a real implementation, you might want to clean up the script
            // and any global callbacks, but this is often not necessary for simple cases
        };
    }, [latitude, longitude, title, zoom, showControls]);

    const handleRetry = () => {
        setError(null);
        setMapLoaded(false);
        // Reload the component by forcing a re-render
        window.location.reload();
    };

    if (error) {
        return (
            <div className="glass-card rounded-2xl p-6" style={{ height }}>
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <Map className="w-16 h-16 text-text-muted mb-4" />
                    <h3 className="text-lg font-semibold text-text-main mb-2">Map Unavailable</h3>
                    <p className="text-text-muted mb-4">{error}</p>
                    <button
                        onClick={handleRetry}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-colors duration-300"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (!mapLoaded) {
        return (
            <div className="glass-card rounded-2xl p-6" style={{ height }}>
                <div className="flex flex-col items-center justify-center h-full">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                    <p className="text-text-muted">Loading map...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-2xl overflow-hidden" style={{ height }}>
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-text-main">{title}</span>
                </div>
                <div className="text-sm text-text-muted mt-1">
                    {latitude.toFixed(4)}, {longitude.toFixed(4)}
                </div>
            </div>
        </div>
    );
}

// Alternative static map component for when Google Maps is not available
export function StaticMapComponent({
    latitude,
    longitude,
    title = "Hospital Location",
    height = "400px"
}: MapComponentProps) {
    // Generate a static map URL from OpenStreetMap or similar service
    const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${latitude},${longitude}&zoom=15&size=600x400&markers=${latitude},${longitude},red-pushpin`;

    return (
        <div className="glass-card rounded-2xl overflow-hidden" style={{ height }}>
            <img
                src={staticMapUrl}
                alt={`${title} location map`}
                className="w-full h-full object-cover"
                style={{ height }}
            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-text-main">{title}</span>
                </div>
                <div className="text-sm text-text-muted mt-1">
                    {latitude.toFixed(4)}, {longitude.toFixed(4)}
                </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-2 text-xs text-text-muted">
                Static Map View
            </div>
        </div>
    );
}

// Component for displaying multiple hospital locations on a map
export function MultiLocationMap({
    hospitals,
    center,
    zoom = 12,
    height = "500px"
}: {
    hospitals: Array<{ latitude: number; longitude: number; name: string; id: string }>;
    center?: { lat: number; lng: number };
    zoom?: number;
    height?: string;
}) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (!hospitals.length) return;

        const loadGoogleMaps = () => {
            if (window.google && window.google.maps) {
                initializeMap();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMultiMap`;
            script.async = true;
            script.defer = true;

            window.initMultiMap = initializeMap;
            document.head.appendChild(script);
        };

        const initializeMap = () => {
            if (!mapRef.current) return;

            try {
                const mapCenter = center || {
                    lat: hospitals[0].latitude,
                    lng: hospitals[0].longitude
                };

                const map = new window.google.maps.Map(mapRef.current, {
                    center: mapCenter,
                    zoom: zoom,
                    mapTypeControl: true,
                    streetViewControl: false,
                    fullscreenControl: true,
                    zoomControl: true
                });

                // Add markers for all hospitals
                hospitals.forEach((hospital) => {
                    new window.google.maps.Marker({
                        position: { lat: hospital.latitude, lng: hospital.longitude },
                        map: map,
                        title: hospital.name,
                        label: {
                            text: hospital.name.split(' ')[0],
                            color: 'white',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }
                    });
                });

                setMapLoaded(true);
            } catch (err) {
                console.error('Error initializing multi-location map:', err);
            }
        };

        loadGoogleMaps();
    }, [hospitals, center, zoom]);

    if (!hospitals.length) {
        return (
            <div className="glass-card rounded-2xl p-6" style={{ height }}>
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <Map className="w-16 h-16 text-text-muted mb-4" />
                    <p className="text-text-muted">No hospital locations to display</p>
                </div>
            </div>
        );
    }

    if (!mapLoaded) {
        return (
            <div className="glass-card rounded-2xl p-6" style={{ height }}>
                <div className="flex flex-col items-center justify-center h-full">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                    <p className="text-text-muted">Loading map...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card rounded-2xl overflow-hidden" style={{ height }}>
            <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
            <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="font-semibold text-text-main">
                    {hospitals.length} Hospital{hospitals.length !== 1 ? 's' : ''} on Map
                </div>
            </div>
        </div>
    );
}