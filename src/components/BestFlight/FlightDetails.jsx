import React from "react";
import { TbArrowsExchange2 } from "react-icons/tb";

export default function FlightDetails({ flight ,input}) {
  // const selectedData = flight.find(flight => flight.departure_airport.time === input.departure);
  // console.log(selectedData);
  return (
    <div>
      {/* <div className="flight-details">
        <h3>
          {flight.airline} - {flight.flight_number}
        </h3>
        <img src={flight.airline_logo} alt={flight.airline} />
        <p>
          <strong>Departure:</strong> {flight.departure_airport.name} (
          {flight.departure_airport.id}) at {flight.departure_airport.time}
        </p>
        <p>
          <strong>Arrival:</strong> {flight.arrival_airport.name} (
          {flight.arrival_airport.id}) at {flight.arrival_airport.time}
        </p>
        <p>
          <strong>Duration:</strong> {flight.duration} minutes
        </p>
        <p>
          <strong>Airplane:</strong> {flight.airplane}
        </p>
        <p>
          <strong>Class:</strong> {flight.travel_class}
        </p>
        <p>
          <strong>Legroom:</strong> {flight.legroom}
        </p> */}
        {/* <p><strong>Extensions:</strong> {flight.extensions.join(', ')}</p> */}
      {/* </div> */}

      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  <h6 className="">
                    {input.departure}
                    <TbArrowsExchange2 />
                    {input.arival}
                  </h6>
              </time>
              <h4>{}₹</h4>
              <img src={flight.airline_logo} alt="" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white ">
              {flight.airline}-{flight.flight_number}
              </h3>
              <p>
          <strong>Departure:</strong> {flight.departure_airport.time}
        </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                fly{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
    </div>
  );
}
