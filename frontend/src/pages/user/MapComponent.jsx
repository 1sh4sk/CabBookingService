import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      window.initMap = function () {
        new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 12.9716, lng: 77.5946 },
          zoom: 10,
        });
      };
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default MapComponent;
