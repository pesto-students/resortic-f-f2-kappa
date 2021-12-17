import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Location = (props) => {
  console.log(props);
  const center = {
    lat: Number(props.lat),
    lng: Number(props.lon),
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAqMRNsVtp3Nq05lLynv4T9C9JCwVqyq6Q">
        <GoogleMap center={center} mapContainerStyle={containerStyle} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;
