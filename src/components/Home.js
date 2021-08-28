import React from 'react';
import { Segment, Grid, Image, Divider } from 'semantic-ui-react';
import throw_image from '../assets/images/throw.jpg';
import pickup_image from '../assets/images/pickup.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Segment >
        <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column style={{justifyContent: 'center'}}>
            
              <Link to={'./throw'}><Image src={throw_image} style={{height: '150px', marginLeft:'40%', marginTop: '40px'}} /></Link>
            
            
          </Grid.Column>
          <Grid.Column>
              <Link to={'./pickup'}><Image src={pickup_image} style={{height: '150px', marginLeft:'30%', marginTop: '40px'}} /></Link>
            
          </Grid.Column>
        </Grid>
    
        <Divider vertical>Throw | PickUP</Divider>
       
      </Segment > 
      
     
      </Segment>
    );
}

export default Home;
