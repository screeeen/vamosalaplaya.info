import React from 'react';
import { samilMap } from './ContestData';
import AccommodationInfo from './AccomodationInfo';
import AccomodationGeneral from './AccomodationGeneral';
import TravelGeneral from './TravelGeneral';

export const LocationAccess = () => {
  const urlPic = `${window.location.href}assets/images/vigo_top.png`;
  const urlPic2 = `${window.location.href}assets/images/marisco_spot.jpg`;
  const urlPista1 = `${window.location.href}assets/promoimages/pista1.jpg`;
  const urlPista2 = `${window.location.href}assets/promoimages/pista2.jpg`;
  const urlPuesta1 = `${window.location.href}assets/promoimages/puesta1.jpg`;
  const urlPuesta2 = `${window.location.href}assets/promoimages/puesta2.jpg`;
  const urlPuesta3 = `${window.location.href}assets/promoimages/puesta3.jpg`;
  const urlPuesta4 = `${window.location.href}assets/promoimages/puesta4.jpg`;
  const urlPuesta5 = `${window.location.href}assets/promoimages/puesta5.jpg`;
  const urlPuesta6 = `${window.location.href}assets/promoimages/puesta6.jpg`;
  const urlPuesta7 = `${window.location.href}assets/promoimages/puesta7.jpg`;
  const urlBlur1 = `${window.location.href}assets/promoimages/blur1.jpg`;
  const urlBlur2 = `${window.location.href}assets/promoimages/blur2.jpg`;
  const urlBlur3 = `${window.location.href}assets/promoimages/blur3.jpg`;
  const urlBlur4 = `${window.location.href}assets/promoimages/blur4.jpg`;
  const urlBlur5 = `${window.location.href}assets/promoimages/blur5.jpg`;
  const urlBlur6 = `${window.location.href}assets/promoimages/blur6.jpg`;
  const urlBlur7 = `${window.location.href}assets/promoimages/blur7.jpg`;
  return (
    <>
      <div id="locationaccess">
        <img src={urlPic} />
        <ul
          style={{
            background: 'white',
            color: 'black',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <li>Madrid: 580 kilometers</li>
          <li>Barcelona: 1100 kilometers</li>
        </ul>
        <img src={urlPista1} />
        <img src={urlPista2} />
        <img src={urlPic2} />
        <h1>lovely skateboarding</h1>
        {/* <img src={urlBlur2} /> */}
        <img src={urlBlur3} />
        <img src={urlBlur4} />
        {/* <img src={urlBlur1} /> */}
        <img src={urlBlur5} />
        <img src={urlBlur7} />
        <img src={urlBlur6} />
        <p>Lino Escuris 📷</p>
        <h1> lovely vibes...</h1>
        <img src={urlPuesta2} />
        {/* <img src={urlPuesta3} /> */}
        <img src={urlPuesta7} />
        <img src={urlPuesta6} />
        <img src={urlPuesta5} />
        <img src={urlPuesta4} />
        <img src={urlPuesta1} />
        <p>Raisa Abal 📷</p>
        
        <h1>location</h1>
        {samilMap()}
        <br />
        <TravelGeneral />

        {/* <AccomodationGeneral /> */}
        <div className="generaltext">{AccommodationInfo()}</div>
      </div>
    </>
  );
};
