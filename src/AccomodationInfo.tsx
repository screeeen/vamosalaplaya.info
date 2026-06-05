import React from "react";

const AccommodationInfo = () => {
  return (
    <div>
      <h1>hotels / appartments</h1>
      <h1>for your stay</h1>

      <section>
        <h2>Stay Details</h2>
        <p>
          <strong>Check-In:</strong> 6th August <br />
          <strong>Check-Out:</strong> 10th August <br />
          <strong>Duration:</strong> 4 nights <br />
          <strong>Accommodation:</strong> Beachfront apartment for 5 people <br />
          <strong>Beds:</strong> 3 individual beds + 1 double bed <br />
          <strong>Amenities:</strong> 2 Bathrooms, 1 Kitchen
        </p>
        <a href="https://homeygalicia.com/" target="_blank" rel="noopener noreferrer">
          View Apartments
        </a>
      </section>

      <section>
        <h2>Location Advantages</h2>
        <ul>
          <li>100m from the sea</li>
          <li>100m from the contest skate area</li>
          <li>
            100m from supermarket:{" "}
            <a href="https://goo.gl/maps/mMNrs8shDExDoREr7" target="_blank" rel="noopener noreferrer">
              View Map
            </a>
          </li>
          <li>20m from bus stop</li>
          <li>
            8km from downtown NTC:{" "}
            <a href="https://goo.gl/maps/W4sENpAxgKkC19yr6" target="_blank" rel="noopener noreferrer">
              Plaza de la Estrella
            </a>
          </li>
          <li>
            8km from Vialia Skatepark:{" "}
            <a href="https://goo.gl/maps/Lrfxf5ThJTVwCnfB8" target="_blank" rel="noopener noreferrer">
              View Map
            </a>
          </li>
          <li>
            100km from Santiago de Compostela Skate Plaza:{" "}
            <a href="https://goo.gl/maps/KY51emcANrf2Mgua6" target="_blank" rel="noopener noreferrer">
              View Map
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Arrival Shuttle Info</h2>
        <p>
          We can likely arrange a shuttle from Porto, Santiago de Compostela, or Vigo airport. Please contact us a few days in advance to coordinate transfer to your accommodation or the venue.
        </p>
      </section>

      <section>
        <h2>Local Shuttle Service</h2>
        <p>
          The contest location at Samil Beach is 8km from Vigo city center. O Marisquiño will provide a circular bus route between the city center and the contest site for all participants.
        </p>
      </section>
    </div>
  );
};

export default AccommodationInfo;
