import React from "react";
import { useState } from "react";

export default function Form({ submit, input, fetch }) {
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
      <form action=""  method="POST" onSubmit={fetch}>
        <div className="min-h-screen p-6 flex items-center justify-center bg-cyan-100 ">
          <div className="container max-w-screen-lg mx-auto">
            <h2 className="font-semibold text-x1 text-gray-600">
              Responsive Form
            </h2>
            <p className="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>

            <div className="bg rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className=" grid gap-2 grid-cols-2 text-sm  md:grid-cols-2 ">
                    <div className="md:col-span-5">
                      <label htmlor="full_name">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="enter your name"
                        value={input.name}
                        onChange={submit}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlor="full_name">Departure</label>
                      <input
                        type="text"
                        name="departure"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Departure Location"
                        value={input.departure}
                        onChange={submit}
                      />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlor="email">Arrival</label>
                      <input
                        type="text"
                        name="arival"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Arival Location"
                        value={input.arival}
                        onChange={submit}
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlor="address">outboundDate</label>
                      <input
                        type="date"
                        name="outboundDate"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="dd/mm/yyyy"
                        value={input.outboundDate}
                        onChange={submit}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlor="city">ReturnDate</label>
                      <input
                        type="date"
                        name="returnDate"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="dd/mm/yyyy"
                        value={input.returnDate}
                        onChange={submit}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
