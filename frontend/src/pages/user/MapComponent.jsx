// import React, { useEffect } from "react";

// const MapComponent = () => {
//   useEffect(() => {
//     const loadGoogleMaps = () => {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.GOOGLE_MAPS_API}&callback=initMap`;
//       script.async = true;
//       window.initMap = function () {
//         new window.google.maps.Map(document.getElementById("map"), {
//           center: { lat: 12.9716, lng: 77.5946 },
//           zoom: 10,
//         });
//       };
//       document.head.appendChild(script);
//     };

//     loadGoogleMaps();
//   }, []);

//   return <div id="map" className="w-full h-full " />;
// };

// export default MapComponent; 

import React, { useEffect, useState } from "react";

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Get user's current location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Load Google Maps API only if not already loaded
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=maps,marker&loading=async`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (userLocation) {
            initMap();
          }
        };
        document.head.appendChild(script);
      } else {
        if (userLocation) {
          initMap();
        }
      }
    };

    // Initialize Google Map and add marker
    const initMap = () => {
      if (!map && userLocation) {
        const newMap = new window.google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 15,
          mapId: "DEMO_MAP_ID", // Optional: Use a Map ID for better customization
        });
        setMap(newMap);

        // Use the new AdvancedMarkerElement instead of google.maps.Marker
        new window.google.maps.marker.AdvancedMarkerElement({
          map: newMap,
          position: userLocation,
          title: "Your Location",
        });
      }
    };

    getUserLocation();
    loadGoogleMaps();
  }, []); // Run only once on mount

  // Update map center when userLocation changes
  useEffect(() => {
    if (map && userLocation) {
      map.setCenter(userLocation);
      new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: userLocation,
        title: "Your Location",
      });
    }
  }, [userLocation]);

  return <div id="map" className="w-full h-full" />;
};

export default MapComponent;





