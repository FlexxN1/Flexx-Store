import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map () {
  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 19.4267261, lng: -99.1718706
  }

  return (
    <LoadScript googleMapsApiKey={process.env.APY_KEY_GOOGLE_MAPS}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;