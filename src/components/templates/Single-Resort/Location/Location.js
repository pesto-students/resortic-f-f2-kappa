import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Location = () => {
  const center = {
    lat: 21.466871,
    lng: 83.981171,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <LoadScript googleMapsApiKey="AIzaSyAqMRNsVtp3Nq05lLynv4T9C9JCwVqyq6Q">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;
