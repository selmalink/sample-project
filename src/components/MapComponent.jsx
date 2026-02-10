import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Vite requires importing images with ?url so they resolve correctly at runtime
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png?url";
import markerIcon from "leaflet/dist/images/marker-icon.png?url";
import markerShadow from "leaflet/dist/images/marker-shadow.png?url";

// Ensure Leaflet's default icon paths are set correctly for the build
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapComponent({ markers }) {
  // Default center (fallback) and zoom
  const defaultCenter = [47.6567, -122.3066];
  const [center, setCenter] = useState(defaultCenter);

  // Try to use browser geolocation to center the map on the user's location
  useEffect(() => {
    if (!navigator.geolocation) return;

    const id = navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCenter([latitude, longitude]);
      },
      (err) => {
        // silently ignore and keep default center
        // console.warn('geolocation failed', err);
      },
      { enableHighAccuracy: true, maximumAge: 1000 * 60 * 5 }
    );

    return () => {
      // nothing to cleanup for getCurrentPosition
    };
  }, []);

  // Example markers (coffee shops) if none provided
  const sampleMarkers = [
    { coords: [center[0], center[1]], title: "You are here", description: "Your current location (approx)" },
    { coords: [47.6575, -122.3080], title: "Brew Corner", description: "Small batch coffee & pastries" },
    { coords: [47.6559, -122.3052], title: "Roast House", description: "Single-origin coffees" },
  ];

  const locations = markers && markers.length ? markers : sampleMarkers;

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "60vh", width: "100%", maxWidth: "920px", borderRadius: "12px", overflow: "hidden" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => (
          <Marker key={index} position={location.coords}>
            <Popup>
              <strong>{location.title || "Location"}</strong>
              <div>{location.description}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
