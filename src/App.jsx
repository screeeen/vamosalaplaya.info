import React from 'react';
import { Intro } from './Texts';
import { ContestData } from './ContestData';
import { VigoSkateCitySpots } from './VigoSkateCitySpots';
import { RegistrationInfo } from './RegistrationInfo';
import { EventSchedule } from './EventSchedule';
import { ContestFlow } from './ContestFlow';
import { WCSPrizeTable } from './WCSPrizeTable';
import { Winners } from './Winners';
import 'animate.css';

import './App.css';
import KitschStar from './KitschStar.tsx';
import { Skatepark } from './Skatepark.tsx';
import AccommodationInfo from './AccomodationInfo.tsx';

const App = () => {
  return (
    <>
      <h1>hey... how vigoes...?</h1>
      <h3>this is your fave lovely coach guide to</h3>
      <h1>MARISQUIÑO 2026</h1>
      <h2 className="animate__animated animate__hinge">SUPER CONTEST!</h2>
      <h3>(your coach will be proud!)</h3>
      <img src={`${window.location.href}assets/promoimages/stablishing_shot.jpg`} />
      <div className="generaltext">{ContestData()}</div>

      <h1 style={{ textAlign: 'left', marginLeft: '1rem' }}>
        a lovely contest
      </h1>

      <div className="generaltext">{WCSPrizeTable()}</div>
      <div className="generaltext">{EventSchedule()}</div>
      <div className="generaltext">{ContestFlow()}</div>
      <div className="generaltext">{Skatepark()}</div>
      <div className="generaltext">{RegistrationInfo()}</div>
      <Winners />

      <p style={{ padding: '0 1rem' }}>
        <strong style={{ color: 'pink', fontStyle: 'italic' }}>
          "We are not the champagne of skateboarding 👯‍♀️👯‍♀️👯‍♀️"
        </strong>{' '}
        - Course builder
      </p>
      {/* <div className="generaltext">{VigoSkateCitySpots()}</div> */}
    </>
  );
};

export default App;
