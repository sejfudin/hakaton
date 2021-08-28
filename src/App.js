import Header from './components/Header';
import Home from './components/Home';
import Throw from './components/Throw';
import Map from './components/Map';
import Pickup from './components/Pickup';
import React, { useState, useEffect } from 'react'


import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const [locations, setLocations] = useState([
    {
      location: 'Zeljeznicka 18',
      distance: 4,
      load: 30,
      link: 'https://www.google.com/maps/place/%C5%BDeljezni%C4%8Dka+18,+Ilid%C5%BEa+71210/@43.83324,18.3017303,17z/data=!3m1!4b1!4m5!3m4!1s0x4758ca4183af052d:0xe0f36f094fc26c20!8m2!3d43.83324!4d18.303919'
    },
    {
      location: 'Milana Preloga 5',
      distance: 6,
      load: 72,
      link: 'https://www.google.com/maps/place/Milana+Preloga+5,+Sarajevo+71000/@43.8470837,18.3731583,17z/data=!3m1!4b1!4m5!3m4!1s0x4758c90d7f2b1d77:0x2033764d5beadfb7!8m2!3d43.8470837!4d18.375347'
    },
    {
      location: 'Kemala Kapetanovića 34',
      distance: 2,
      load: 51,
      link: 'https://www.google.com/maps/place/Kemala+Kapetanovi%C4%87a+34,+Sarajevo+71000/@43.8510134,18.3867122,17z/data=!3m1!4b1!4m5!3m4!1s0x4758c919e789ccd1:0x94c47a778ff6bfa0!8m2!3d43.8510134!4d18.3889009'
    },
    {
      location: 'Franjevačka 21',
      distance: 1,
      load: 37,
      link: 'https://www.google.com/maps/place/Franjeva%C4%8Dka+21,+Sarajevo+71000/@43.8563578,18.4318388,17z/data=!3m1!4b1!4m5!3m4!1s0x4758c8b82898aec3:0x6a338b2eeb52b78e!8m2!3d43.8563578!4d18.4340275'
    },
    {
      location: 'Betanija 4',
      distance: 4,
      load: 60,
      link: 'https://www.google.com/maps/place/Betanija,+Sarajevo+71000/@43.87478,18.4052166,17z/data=!3m1!4b1!4m5!3m4!1s0x4758ced3dface617:0xe53d4d9bbd0d8580!8m2!3d43.87478!4d18.4074053'
    },
  ])
  let enable = false
  const onClick = () => {
    enable = true
  }

  const [check, setCheck] = useState(locations[0].load)
  const [check1, setCheck1] = useState(locations[1].load)
  const [check2, setCheck2] = useState(locations[2].load)
  const [check3, setCheck3] = useState(locations[3].load)
  const [check4, setCheck4] = useState(locations[4].load)
  const [check5, setCheck5] = useState(locations[5].load)


  useEffect(() => {
    setTimeout(() => {
      setInterval(function () { setCheck(check => check + 5) }, 2000)
    }, 20000);
    setTimeout(() => {
       setInterval(function () { setCheck(check => check + 10) }, 1500)
    }, 15000);
    setTimeout(() => {
      setInterval(function () { setCheck(check => check + 8) }, 1000)
    }, 12000);
    setTimeout(() => {
      setInterval(function () { setCheck(check => check + 9) }, 2500)
    }, 16000);
    setTimeout(() => {
      setInterval(function () { setCheck(check => check + 12) }, 3000)
    }, 10000);
    setTimeout(() => {
      setInterval(function () { setCheck(check => check + 14) }, 4500)
    }, 20000);

  }, [])

  useEffect(() => {
    if (check <= 100) {
      setLocations([...locations, locations[0].load = check])
      setLocations([...locations, locations[1].load = check1])
      setLocations([...locations, locations[2].load = check2])
      setLocations([...locations, locations[3].load = check3])
      setLocations([...locations, locations[4].load = check4])
      setLocations([...locations, locations[5].load = check5])

    }
  }, [check])

  console.log(locations[0].load)

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
        <Switch>
          <Route exact path="/" component={Map} />
          <Route exact path="/throw" component={() => <Throw locations={locations} onClick={onClick} />} />
          <Route exact path="/pickup" component={() => <Pickup locations={locations} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
