import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  minHeight: '500px',
};
const location = {
  lat: 23.733348,
  lng: 90.406707,
};

const onLoad = (marker) => {
  console.log('marker: ', marker);
};

function MapSection() {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={16}
        >
          <Marker onLoad={onLoad} position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapSection;
