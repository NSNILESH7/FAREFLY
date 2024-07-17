import React from "react";
import { Flightlist } from "../store/flightsdetails";
import { useContext } from 'react';


export default function Form() {
  const  { submit, input, fetch }=useContext(Flightlist)


  // const departureref = useRef();
  // const arivalref = useRef();
  // const outboundref = useRef();
  // const returndateref = useRef();
  // const nameref = useRef();

  // let submit = (e) => {
  //   e.preventDefault();
  //   let departure = departureref.current.value;
  //   let arival = arivalref.current.value;
  //   let outboundDate = outboundref.current.value;
  //   let returnDate = returndateref.current.value;
  //   let name = nameref.current.value;
  //   console.log(departure, arival, outboundDate, returnDate, name);

  return (
    <>
      <div class="flex flex-col items-center bg- text-black w-full">

        <main class="w-5/6 my-32 ">
          <div class="bg-[#e1c08e] p-8 rounded-lg shadow-md text-center">
            <h1 class="mb-5">Discover A World Of Comfort And Convenience.</h1>
            <form class="flex flex-wrap justify-center gap-4" onSubmit={fetch}>
              <input
                type="text"
                name="departure"
                placeholder="From Bengaluru (BLR)"
                class="p-2 rounded border-none"
                value={input.departure}
                onChange={submit}
              />
              <input
                type="text"
                name="arival"
                placeholder="To Country, city or airport"
                class="p-2 rounded border-none"
                value={input.arival}
                onChange={submit}
              />
              <input
                type="date"
                name="outboundDate"
                placeholder="Depart"
                class="p-2 rounded border-none"
                value={input.outboundDate}
                onChange={submit}
              />
              <input
                type="date"
                name="returnDate"
                placeholder="Return"
                class="p-2 rounded border-none"
                value={input.returnDate}
                onChange={submit}
              />
              <select class="p-2 rounded border-none">
                <option>Economy</option>
              </select>
              <button
                type="submit"
                class="p-2 rounded bg-orange-500 text-white hover:bg-orange-600"
              >
                Search
              </button>
              <div class="flex gap-5 mt-2 ml-0">
                <label>
                  <input type="checkbox" class="mr-2" /> Add nearby airports
                </label>
                <label>
                  <input type="checkbox" class="mr-2" /> Add nearby airports
                </label>
                <label>
                  <input type="checkbox" class="mr-2" /> Direct flights
                </label>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
