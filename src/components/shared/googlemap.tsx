import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
export default function Googlemap() {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 37.7749, // Latitude for San Francisco
    lng: -122.4194, // Longitude for San Francisco
  };
  return (
    <>
      <div>
        <LoadScript googleMapsApiKey="NEXT_PUBLIC_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}
