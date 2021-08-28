import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import Location from './Location';

const Throw = ({locations, onClick}) => {
    const nesto = locations.map((loc, index) => {
        if (loc.load < 80) {
            return <Location loc={loc} key={index} onClick={onClick}/>
        } else {
            return;}
    })
    return (
        <div style={{marginLeft:"20px"}}>
            <h3>Locations</h3>
            <Card.Group>
            {nesto}
            </Card.Group>
        </div>
    )
}
export default Throw;