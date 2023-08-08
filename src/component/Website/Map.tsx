import React from "react";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
// const location = {
//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
//     lat: 37.42216,
//     lng: -122.08427,
//   }

// const LocationPin = (props:{text:string, lat:number; lng:number}) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{props.text}</p>
//   </div>
// );
// const Map = (props:{zoomLevel:number; location:{address:string; lat:number; lng:number}}) => (
//   <div className="map">
//     <div className="google-map">
//       <GoogleMapReact
//        // bootstrapURLKeys={{ key: "AIzaSyDTAwu0RnCQoEZUQfJzdlVhxyNnATq6bRM" }}
//         defaultCenter={location}
//         defaultZoom={props.zoomLevel}
//       >
//       <LocationPin
//         lat={location.lat}
//         lng={location.lng}
//         text={location.address}
//        />
//       </GoogleMapReact>
//     </div>
//   </div>
// );

// function SimpleMap() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "300px", width: "700px" }}>
//       <Map location={location} zoomLevel={17} />
//     </div>
//   );
// }
// export default SimpleMap;

export default Map;
