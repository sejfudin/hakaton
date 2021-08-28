import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Location = ({ loc }) => {
    console.log(loc)

    

    return (
            <Card >
                <Image
                    icon='right circle arrow'
                    placeholder='/images/image-16by9.png'
                    url={loc.location}
                />
                <Card.Content>
                    <Card.Header>{loc.location}</Card.Header>
                    <Card.Meta>
                        <span >{loc.distance}KM</span>
                    </Card.Meta>
                    <Card.Description>
                        {loc.load}% Loaded
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={loc.link} target="_blank">Take me there</a>
                </Card.Content>
            </Card>)
}
export default Location;