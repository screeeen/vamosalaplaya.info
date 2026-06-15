import React from 'react';

export const VigoSkateCitySpots = () => {
  return (
    <div id="vigoskatecityspots">
      {/* <h2>Vigo Skate City Spots and Some Geek Notes (and shitty pictures)</h2> */}
      <h2>mistery pictures of vigo spots</h2>


        <img
          src={`${import.meta.env.BASE_URL}assets/images/spotGX.png`}
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
        <img
          src={`${import.meta.env.BASE_URL}assets/images/spotGX2.png`}
          alt="Downhill in Vigo"
          style={{ width: '100%', maxWidth: 600 }}
        />
      </div>
  );
};
