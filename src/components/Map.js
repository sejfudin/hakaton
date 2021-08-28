import React from 'react';
import map_image from '../assets/images/locations.jpg';


const Map = () => {
    return (
        <div>
            <h3 style={{textAlign:'center', wordSpacing: '15px'}}>TRASH CONTAINERS   MAP</h3>
        <img src={map_image} style={{width:'100%', height:'400px', border:'1px solid grey'}}/>
        </div>
    )
}
export default Map;