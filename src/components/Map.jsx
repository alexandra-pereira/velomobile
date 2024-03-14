import React, { useEffect, useState } from "react";

function Map() {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const mapInstance = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
      });
      const infoWindowInstance = new google.maps.InfoWindow();
      setMap(mapInstance);
      setInfoWindow(infoWindowInstance);
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.onload = loadMap;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  const handleLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  };

  const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  };

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}>
      {map && (
        <button onClick={handleLocationButtonClick}>Pan to Current Location</button>
      )}
    </div>
  );
}

export default Map;
