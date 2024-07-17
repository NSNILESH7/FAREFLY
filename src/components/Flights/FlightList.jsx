import {React,useState} from "react";
import FlightOption from "./FlightOptions";
import Flight from './Flight'

export default function FlightList({ flighstData, input,setSelectedFlightIndex }) {
  // console.log(flighstData);



  const handleSelectFlight = (index) => {
    setSelectedFlightIndex(flighstData[index]);
  };
  
  return (
    <>
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Well Come {input.name}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <br />
      <br />

      <div className="flight-list">
        {flighstData.map((flights, index) => (
          <FlightOption key={index} flights={flights} input={input} i={index} handleSelectFlight={handleSelectFlight} />
        ))}
      </div>
    </>
  );
}
