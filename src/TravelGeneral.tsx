import React from "react";

const TravelGeneral = () => {
  return (
    <>
      <h1>travel</h1>
      <h2 style={{ fontStyle: "italic" }}>TRAINS!</h2>
      <ul>
        <li>
          <a href="https://www.renfe.es" target="_blank" rel="noopener noreferrer">
            www.renfe.es
          </a>
          <br />
          High-speed (AVE) and regional trains. Stations: Vigo-Urzáiz
          (high-speed) and Vigo-Guixar (long distance).
        </li>
        <li>
          Direct connection from Ourense, Santiago, A Coruña, Madrid (≈6h),
          Zamora, León.
        </li>
      </ul>

      <h2 style={{ fontStyle: "italic" }}>BUSES!!</h2>
      <ul>
        <li>
          <a href="https://www.alsa.es" target="_blank" rel="noopener noreferrer">
            www.alsa.es
          </a>
          <br />
          Routes from Madrid, Gijón, Bilbao, León, Salamanca, and other major
          cities.
        </li>
        <li>
          <a href="https://www.avanzabus.com" target="_blank" rel="noopener noreferrer">
            www.avanzabus.com
          </a>
          <br />
          Some national routes to Galicia.
        </li>
        <li>
          <a href="https://www.flixbus.com" target="_blank" rel="noopener noreferrer">
            www.flixbus.com
          </a>
          <br />
          International lines from France, Portugal, and northern Spain.
        </li>
        <li>
          <a href="https://www.autna.com" target="_blank" rel="noopener noreferrer">
            www.autna.com
          </a>
          <br />
          Daily service between Porto Airport and Vigo.
        </li>
        <li>
          Vigo's main bus station: Rúa de Isaac Peral, 2. City and regional
          connections.
        </li>
      </ul>

      <h2 style={{ fontStyle: "italic" }}>AIRPLANES!!!</h2>
      <ul>
        <li>
          <strong>Vigo Airport (VGO)</strong>: national flights with Iberia,
          Air Europa, Volotea, and Vueling.
          <br />
          Access via city bus (Line L9A) or taxi (≈18 €).
        </li>
        ---
        <li>
          <strong>Santiago de Compostela Airport (SCQ)</strong>: international
          and national flights with Ryanair, Vueling, Iberia, Lufthansa.
          <br />
          Access by train (RENFE to Vigo), bus, or car.
        </li>
        ---
        <li>
          <strong>Porto Airport (OPO)</strong>: many low-cost airlines. Direct
          bus connection to Vigo (Autna).
          <br />
          Distance: 150 km.
        </li>
        ---
        <li>
          <strong>A Coruña Airport (LCG)</strong>: domestic flights. 160 km
          from Vigo. Access by train or car.
        </li>
      </ul>
    </>
  );
};

export default TravelGeneral;
