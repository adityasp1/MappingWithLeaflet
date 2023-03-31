import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

export default function App() {
  // array of markers
  const markers = [
    {
      geocode: [28.655, 77.1888],
      popUp: "Karol Bagh"
    },
    {
      geocode: [28.6304, 77.2177],
      popUp: "Cannaught Place"
    },
    {
      geocode: [28.6505, 77.2303],
      popUp: "Chandni Chowk"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [38, 38] // size of icon
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: [33, 33]
    });
  };

  return (
    <MapContainer center={[28.6139, 77.209]} zoom={11}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
