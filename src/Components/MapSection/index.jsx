import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  minHeight: "670px",
};
const location = {
  lat: 23.733348,
  lng: 90.406707,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

function MapSection() {
  return (
    <div style={{ height: "400px" }}>
      <LoadScript googleMapsApiKey="AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ">
        <GoogleMap
          style={{ minHeight: "19rem" }}
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
