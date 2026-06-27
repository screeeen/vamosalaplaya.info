import React from "react";

const TravelGeneral = () => {
  return (
    <>
      <h1>travel options</h1>

      <h2>By train</h2>
      <ul>
        <li>
          <a href="https://www.renfe.es" target="_blank" rel="noopener noreferrer">
            Renfe
          </a>{" "}
          — high-speed (AVE) and regional trains.
          <br />
          Stations: Vigo-Urzáiz (high-speed) and Vigo-Guixar (long distance).
          <br />
          Direct connections from Madrid (≈6h), Santiago, A Coruña, Ourense,
          Zamora and León.
        </li>
      </ul>

      <h2>By bus</h2>
      <ul>
        <li>
          <a href="https://www.alsa.es" target="_blank" rel="noopener noreferrer">
            Alsa
          </a>{" "}
          — routes from Madrid, Bilbao, Gijón, León, Salamanca and other major
          cities.
        </li>
        <li>
          <a href="https://www.avanzabus.com" target="_blank" rel="noopener noreferrer">
            Avanza
          </a>{" "}
          — additional national routes into Galicia.
        </li>
        <li>
          <a href="https://www.flixbus.com" target="_blank" rel="noopener noreferrer">
            Flixbus
          </a>{" "}
          — international lines from France, Portugal and northern Spain.
        </li>
        <li>
          <a href="https://www.autna.com" target="_blank" rel="noopener noreferrer">
            Autna
          </a>{" "}
          — daily service between Porto Airport and Vigo.
        </li>
        <li>
          Vigo's main bus station is at Rúa de Isaac Peral, 2, with city and
          regional connections.
        </li>
      </ul>

      <h2>By plane</h2>
      <ul>
        <li>
          <strong>Vigo (VGO)</strong> — national flights with Iberia, Air
          Europa, Volotea and Vueling.
        </li>
        <li>
          <strong>Santiago de Compostela (SCQ)</strong> — national and
          international flights with Ryanair, Vueling, Iberia and Lufthansa.
        </li>
        <li>
          <strong>Porto, Portugal (OPO)</strong> — many low-cost airlines, 150
          km away.
        </li>
        <li>
          <strong>A Coruña (LCG)</strong> — domestic flights, 160 km away.
        </li>
      </ul>
      <p>We will pick you up at the airport!</p>
    </>
  );
};

export default TravelGeneral;
