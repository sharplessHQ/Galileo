import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import google_maps_api_key from '../../../google_maps_api_key';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.191450819000465,
            lng: -97.77308111999969
          }
        }
      >
        <Marker
          position={{
            lat: 30.191450819000465,
            lng: -97.77308111999969
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: google_maps_api_key
})(MapContainer);