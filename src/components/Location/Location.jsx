import React, { Component } from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";

class Location extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: -25.462077, lng: -49.2930321}}
      >
        <Marker 
          position={{ lat: -25.462077, lng: -49.2930321 }} 
          draggable={false}
          label="BaseCWB"
        />
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Location));
