import React from "react";
import { Flightlist } from "../../store/flightsdetails";
import { useContext } from "react";
import { ImArrowRight } from "react-icons/im";

export default function Flight() {
  const { selectedFlightIndex } = useContext(Flightlist);
  console.log(selectedFlightIndex);
  return (
    <>
      <div className="App">
        {selectedFlightIndex !== null && (
          <div>
            <h2>Flight Information</h2>
            {/* <pre>{JSON.stringify(flightData[selectedFlightIndex], null, 2)}</pre> */}
            <img src={selectedFlightIndex.airline_logo} alt="" />
          </div>
        )}
      </div>

      <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-8 h-auto w-auto">
        <div className="flex flex-wrap">
        <h3 className="text-3xl font-bold text-white mb-4">
            {selectedFlightIndex.flights[0].departure_airport.name}
          </h3>
          <span className="m-3"><ImArrowRight/></span>
          <h3 className="text-3xl font-bold text-white mb-4">
            {selectedFlightIndex.flights[selectedFlightIndex.flights.length-1].arrival_airport.name}
          </h3> 
        </div>
          <div className="flex flex-row">
          <img
                  src={selectedFlightIndex.airline_logo}
                  alt=""
                  className="rounded-3xl w-20 h-20"
                />
                <h3>{selectedFlightIndex.price} ₹&thinsp;</h3>
                <li className="flex mb-6">
                 
                  <span className="ml-3 font-bold text-white" >
                  Total Duration:{" "}
                    <span className="text-white">
                      {selectedFlightIndex.total_duration
                      }
                    </span>
                  </span>
                </li>
          </div>
          <a
            href="#"
            className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-2 px-4 rounded"
          >
            Get started
          </a>
        </div>
      </div>
    </>
  );
}
