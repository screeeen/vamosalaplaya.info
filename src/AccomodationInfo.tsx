import React from "react";

const AccommodationInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold">not the Accommodation Info for the invitational contest that helds from saturday</h1>
      

      <section>
        <h2 className="text-xl font-semibold mb-2">Stay Details</h2>
        <p>
          <strong>Check-In:</strong> 7th August <br />
          <strong>Check-Out:</strong> 11th August <br />
          <strong>Duration:</strong> 4 nights <br />
          <strong>Accommodation:</strong> Beachfront apartment for 5 people <br />
          <strong>Beds:</strong> 3 individual beds + 1 double bed <br />
          <strong>Amenities:</strong> 2 Bathrooms, 1 Kitchen
        </p>
        <a
          href="https://homeygalicia.com/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Apartments
        </a>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Location Advantages</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>100m from the sea</li>
          <li>100m from the contest skate area</li>
          <li>
            100m from supermarket:{" "}
            <a
              href="https://goo.gl/maps/mMNrs8shDExDoREr7"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </li>
          <li>20m from bus stop</li>
          <li>
            8km from downtown NTC:{" "}
            <a
              href="https://goo.gl/maps/W4sENpAxgKkC19yr6"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plaza de la Estrella
            </a>
          </li>
          <li>
            8km from Vialia Skatepark:{" "}
            <a
              href="https://goo.gl/maps/Lrfxf5ThJTVwCnfB8"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </li>
          <li>
            100km from Santiago de Compostela Skate Plaza:{" "}
            <a
              href="https://goo.gl/maps/KY51emcANrf2Mgua6"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Map
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Arrival Shuttle Info</h2>
        <p>
          We can likely arrange a shuttle from Porto, Santiago de Compostela, or Vigo airport. Please contact us a few days in advance to coordinate transfer to your accommodation or the venue.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Local Shuttle Service</h2>
        <p>
          The contest location at Samil Beach is 8km from Vigo city center. O Marisquiño will provide a circular bus route between the city center and the contest site for all participants.
        </p>
      </section>
    </div>
  );
};

export default AccommodationInfo;
