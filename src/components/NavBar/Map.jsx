import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = {
    height: "55vh",
    width: "100%",
    marginTop: "5rem",
    borderRadius: "10px",
    // fontSize: "5rem",
    fontWeight: "bolder",
    // textAlign: "center",
    padding: "2rem",
  };

  const defaultCenter = {
    lat: 5.6037,
    lng: -0.187,
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
