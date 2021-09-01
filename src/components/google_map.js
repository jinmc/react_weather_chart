import React from 'react';
import GoogleMapReact from 'google-map-react';
 
export default (props) => {
    return (
        <div style={{ height: '150px', width: '300px' }}>
            <GoogleMapReact
                defaultCenter={{lat:props.lat, lng:props.lon}}
                defaultZoom={9}>
            </ GoogleMapReact>
        </div>
    );
}