import "./MapDisplay.css";
import "leaflet/dist/leaflet.css";
import {MapContainer, Polyline} from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import { Marker } from "react-leaflet";
import L from "leaflet";

const MapDisplay = (props) => {

    const {markers} = props;
    const {averageDelay} = props;

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

//API Key AIzaSyCOYligIkQ8p8w3O4thyRX888YI6G5Bf6A

    const renderMarker = (position) => {
        if(position){
            return <Marker position = {position} />
        }
    }

    const renderPolyline = () => {
        if(markers){
            if(averageDelay > 900){
                return <Polyline positions={markers} color={'red'} />
            } else if(averageDelay > 300 && averageDelay < 900) {
                return <Polyline positions={markers} color={'yellow'} />
            } else {
                return <Polyline positions={markers} color={'green'} />
            }

        }
    }

    return(
        <div id="map">
            <MapContainer center={[39.828, -98.579]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.length > 0 ? renderMarker(markers[0]) : ''}
                {markers.length > 1 ? renderMarker(markers[1]) : ''}
                {markers.length > 1 ? renderPolyline(): ''}
            </MapContainer>
        </div>
    )
}

export default MapDisplay;