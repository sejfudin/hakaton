import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';

const Pickup = ({ locations }) => {
    const [full, setFull] = useState([])
    console.log(locations)

    const onClick = () => {
        setInterval(locations[0].load + 5, 2000)
    }

const nesto = locations.map((ele, ind) => {
    if (ele.load > 80) {
        return (
            <Card onClick={onClick}>
                <Image
                    icon='right circle arrow'
                    placeholder='/images/image-16by9.png'
                    url={ele.location}
                />
                <Card.Content>
                    <Card.Header>{ele.location}</Card.Header>
                    <Card.Meta>
                        <span >{ele.distance}KM</span>
                    </Card.Meta>
                    <Card.Description>
                        {ele.load}% Loaded
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={ele.link} target="_blank">Take me there</a>
                </Card.Content>
            </Card>)
    } else {
        return;
    }
})

    return (
        <Card.Group>   
            {nesto}
        </Card.Group>
    )
}
export default Pickup;