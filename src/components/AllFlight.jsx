import React from 'react'

import { Flightlist } from "../store/flightsdetails";
import { useContext } from 'react';
import FlightList from './Flights/FlightList';
import Form from './Form';

export default function AllFlight() {
    const {bflight,oflight,input,setSelectedFlightIndex}=useContext(Flightlist)
  return (
    <>
      <Form/>
       {bflight.map((option, index) => (
        <FlightList key={index} flighstData={option} input={input} setSelectedFlightIndex={setSelectedFlightIndex} />
      ))}
      <h2>other flights</h2>
      
      {oflight.map((option, index) => (
      <FlightList key={index} flighstData={option} input={input} setSelectedFlightIndex={setSelectedFlightIndex}/>
    ))}

    </>
  )
}
