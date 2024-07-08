import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useRef } from "react";
import Form from "./components/Form";
import Views from "./components/views";

function App() {
  const [input, setInput] = useState({
    name: "nilesh",
    departure: "IXE",
    arival: "DEL",
    outboundDate: "yyyy/mm/dd",
    returnDate: "yyyy/mm/dd",
  })

  

  const [bflight, setBFlight] = useState(
      [
          {
              "flights": [
                  {
                      "departure_airport": {
                          "name": "Mangaluru International Airport",
                          "id": "IXE",
                          "time": "2024-07-17 20:00"
                      },
                      "arrival_airport": {
                          "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                          "id": "BOM",
                          "time": "2024-07-17 21:35"
                      },
                      "duration": 95,
                      "airplane": "Airbus A321neo",
                      "airline": "IndiGo",
                      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                      "travel_class": "Economy",
                      "flight_number": "6E 164",
                      "legroom": "29 in",
                      "extensions": [
                          "Below average legroom (29 in)",
                          "Carbon emissions estimate: 66 kg"
                      ]
                  },
                  {
                      "departure_airport": {
                          "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                          "id": "BOM",
                          "time": "2024-07-17 23:30"
                      },
                      "arrival_airport": {
                          "name": "Indira Gandhi International Airport",
                          "id": "DEL",
                          "time": "2024-07-18 01:35"
                      },
                      "duration": 125,
                      "airplane": "Airbus A321neo",
                      "airline": "IndiGo",
                      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                      "travel_class": "Economy",
                      "flight_number": "6E 2224",
                      "legroom": "29 in",
                      "extensions": [
                          "Below average legroom (29 in)",
                          "Carbon emissions estimate: 89 kg"
                      ],
                      "often_delayed_by_over_30_min": true
                  }
              ],
              "layovers": [
                  {
                      "duration": 115,
                      "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                      "id": "BOM"
                  }
              ],
              "total_duration": 335,
              "carbon_emissions": {
                  "this_flight": 156000,
                  "typical_for_this_route": 157000,
                  "difference_percent": -1
              },
              "price": 13314,
              "type": "Round trip",
              "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
              "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3cyUlRFMk5IdzJSVEl5TWpRYUNnaUNhQkFBR2dOSlRsSTRISERRZkE9PSIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJPTSIsbnVsbCwiNkUiLCIxNjQiXSxbIkJPTSIsIjIwMjQtMDctMTciLCJERUwiLG51bGwsIjZFIiwiMjIyNCJdXV0="
          },
          {
              "flights": [
                  {
                      "departure_airport": {
                          "name": "Mangaluru International Airport",
                          "id": "IXE",
                          "time": "2024-07-17 11:25"
                      },
                      "arrival_airport": {
                          "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                          "id": "BOM",
                          "time": "2024-07-17 12:55"
                      },
                      "duration": 90,
                      "airplane": "Airbus A320neo",
                      "airline": "IndiGo",
                      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                      "travel_class": "Economy",
                      "flight_number": "6E 832",
                      "legroom": "28 in",
                      "extensions": [
                          "Below average legroom (28 in)",
                          "Carbon emissions estimate: 64 kg"
                      ],
                      "often_delayed_by_over_30_min": true
                  },
                  {
                      "departure_airport": {
                          "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                          "id": "BOM",
                          "time": "2024-07-17 14:15"
                      },
                      "arrival_airport": {
                          "name": "Indira Gandhi International Airport",
                          "id": "DEL",
                          "time": "2024-07-17 16:25"
                      },
                      "duration": 130,
                      "airplane": "Airbus A321neo",
                      "airline": "IndiGo",
                      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                      "travel_class": "Economy",
                      "flight_number": "6E 993",
                      "legroom": "29 in",
                      "extensions": [
                          "Below average legroom (29 in)",
                          "Carbon emissions estimate: 89 kg"
                      ],
                      "often_delayed_by_over_30_min": true
                  }
              ],
              "layovers": [
                  {
                      "duration": 80,
                      "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                      "id": "BOM"
                  }
              ],
              "total_duration": 300,
              "carbon_emissions": {
                  "this_flight": 155000,
                  "typical_for_this_route": 157000,
                  "difference_percent": -1
              },
              "price": 13424,
              "type": "Round trip",
              "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
              "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3MyUlRnek1udzJSVGs1TXhvS0NQQm9FQUFhQTBsT1VqZ2NjTlI5IixbWyJJWEUiLCIyMDI0LTA3LTE3IiwiQk9NIixudWxsLCI2RSIsIjgzMiJdLFsiQk9NIiwiMjAyNC0wNy0xNyIsIkRFTCIsbnVsbCwiNkUiLCI5OTMiXV1d"
          },
          {
              "flights": [
                  {
                      "departure_airport": {
                          "name": "Mangaluru International Airport",
                          "id": "IXE",
                          "time": "2024-07-17 20:40"
                      },
                      "arrival_airport": {
                          "name": "Indira Gandhi International Airport",
                          "id": "DEL",
                          "time": "2024-07-17 23:35"
                      },
                      "duration": 175,
                      "airplane": "Airbus A321neo",
                      "airline": "IndiGo",
                      "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                      "travel_class": "Economy",
                      "flight_number": "6E 2344",
                      "legroom": "29 in",
                      "extensions": [
                          "Below average legroom (29 in)",
                          "Carbon emissions estimate: 122 kg"
                      ],
                      "often_delayed_by_over_30_min": true
                  }
              ],
              "total_duration": 175,
              "carbon_emissions": {
                  "this_flight": 122000,
                  "typical_for_this_route": 157000,
                  "difference_percent": -22
              },
              "price": 13424,
              "type": "Round trip",
              "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
              "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ1kyUlRJek5EUWFDZ2p3YUJBQUdnTkpUbEk0SEhEVWZRPT0iLFtbIklYRSIsIjIwMjQtMDctMTciLCJERUwiLG51bGwsIjZFIiwiMjM0NCJdXV0="
          }
      ]
  );
  const [oflight, setOFlight] = useState(
    [
        {
            "flights": [
                {
                    "departure_airport": {
                        "name": "Mangaluru International Airport",
                        "id": "IXE",
                        "time": "2024-07-17 20:00"
                    },
                    "arrival_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 21:35"
                    },
                    "duration": 95,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 164",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 66 kg"
                    ]
                },
                {
                    "departure_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-18 01:15"
                    },
                    "arrival_airport": {
                        "name": "Indira Gandhi International Airport",
                        "id": "DEL",
                        "time": "2024-07-18 03:20"
                    },
                    "duration": 125,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 2775",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 89 kg"
                    ],
                    "overnight": true,
                    "often_delayed_by_over_30_min": true
                }
            ],
            "layovers": [
                {
                    "duration": 220,
                    "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                    "id": "BOM"
                }
            ],
            "total_duration": 440,
            "carbon_emissions": {
                "this_flight": 156000,
                "typical_for_this_route": 157000,
                "difference_percent": -1
            },
            "price": 12996,
            "type": "Round trip",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
            "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3cyUlRFMk5IdzJSVEkzTnpVYUNnakVaUkFBR2dOSlRsSTRISERUZVE9PSIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJPTSIsbnVsbCwiNkUiLCIxNjQiXSxbIkJPTSIsIjIwMjQtMDctMTgiLCJERUwiLG51bGwsIjZFIiwiMjc3NSJdXV0="
        },
        {
            "flights": [
                {
                    "departure_airport": {
                        "name": "Mangaluru International Airport",
                        "id": "IXE",
                        "time": "2024-07-17 17:10"
                    },
                    "arrival_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 18:45"
                    },
                    "duration": 95,
                    "airplane": "Airbus A320neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 6523",
                    "legroom": "28 in",
                    "extensions": [
                        "Below average legroom (28 in)",
                        "Carbon emissions estimate: 64 kg"
                    ],
                    "often_delayed_by_over_30_min": true
                },
                {
                    "departure_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 21:15"
                    },
                    "arrival_airport": {
                        "name": "Indira Gandhi International Airport",
                        "id": "DEL",
                        "time": "2024-07-17 23:25"
                    },
                    "duration": 130,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 102",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 93 kg"
                    ]
                }
            ],
            "layovers": [
                {
                    "duration": 150,
                    "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                    "id": "BOM"
                }
            ],
            "total_duration": 375,
            "carbon_emissions": {
                "this_flight": 159000,
                "typical_for_this_route": 157000,
                "difference_percent": 1
            },
            "price": 13356,
            "type": "Round trip",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
            "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3cyUlRZMU1qTjhOa1V4TURJYUNnaXNhQkFBR2dOSlRsSTRISENDZlE9PSIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJPTSIsbnVsbCwiNkUiLCI2NTIzIl0sWyJCT00iLCIyMDI0LTA3LTE3IiwiREVMIixudWxsLCI2RSIsIjEwMiJdXV0="
        },
        {
            "flights": [
                {
                    "departure_airport": {
                        "name": "Mangaluru International Airport",
                        "id": "IXE",
                        "time": "2024-07-17 17:10"
                    },
                    "arrival_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 18:45"
                    },
                    "duration": 95,
                    "airplane": "Airbus A320neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 6523",
                    "legroom": "28 in",
                    "extensions": [
                        "Below average legroom (28 in)",
                        "Carbon emissions estimate: 64 kg"
                    ],
                    "often_delayed_by_over_30_min": true
                },
                {
                    "departure_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 20:00"
                    },
                    "arrival_airport": {
                        "name": "Indira Gandhi International Airport",
                        "id": "DEL",
                        "time": "2024-07-17 22:10"
                    },
                    "duration": 130,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 6049",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 89 kg"
                    ],
                    "often_delayed_by_over_30_min": true
                }
            ],
            "layovers": [
                {
                    "duration": 75,
                    "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                    "id": "BOM"
                }
            ],
            "total_duration": 300,
            "carbon_emissions": {
                "this_flight": 155000,
                "typical_for_this_route": 157000,
                "difference_percent": -1
            },
            "price": 13693,
            "type": "Round trip",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
            "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZzAyUlRZMU1qTjhOa1UyTURRNUdnb0kvV29RQUJvRFNVNVNPQnh3bG9BQiIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJPTSIsbnVsbCwiNkUiLCI2NTIzIl0sWyJCT00iLCIyMDI0LTA3LTE3IiwiREVMIixudWxsLCI2RSIsIjYwNDkiXV1d"
        },
        {
            "flights": [
                {
                    "departure_airport": {
                        "name": "Mangaluru International Airport",
                        "id": "IXE",
                        "time": "2024-07-17 08:45"
                    },
                    "arrival_airport": {
                        "name": "Kempegowda International Airport Bengaluru",
                        "id": "BLR",
                        "time": "2024-07-17 09:35"
                    },
                    "duration": 50,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 256",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 41 kg"
                    ]
                },
                {
                    "departure_airport": {
                        "name": "Kempegowda International Airport Bengaluru",
                        "id": "BLR",
                        "time": "2024-07-17 11:50"
                    },
                    "arrival_airport": {
                        "name": "Indira Gandhi International Airport",
                        "id": "DEL",
                        "time": "2024-07-17 14:40"
                    },
                    "duration": 170,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 869",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 120 kg"
                    ]
                }
            ],
            "layovers": [
                {
                    "duration": 135,
                    "name": "Kempegowda International Airport Bengaluru",
                    "id": "BLR"
                }
            ],
            "total_duration": 355,
            "carbon_emissions": {
                "this_flight": 162000,
                "typical_for_this_route": 157000,
                "difference_percent": 3
            },
            "price": 14419,
            "type": "Round trip",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
            "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3MyUlRJMU5udzJSVGcyT1JvS0NOTndFQUFhQTBsT1VqZ2NjUHlHQVE9PSIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkJMUiIsbnVsbCwiNkUiLCIyNTYiXSxbIkJMUiIsIjIwMjQtMDctMTciLCJERUwiLG51bGwsIjZFIiwiODY5Il1dXQ=="
        },
        {
            "flights": [
                {
                    "departure_airport": {
                        "name": "Mangaluru International Airport",
                        "id": "IXE",
                        "time": "2024-07-17 08:30"
                    },
                    "arrival_airport": {
                        "name": "Rajiv Gandhi International Airport",
                        "id": "HYD",
                        "time": "2024-07-17 10:20"
                    },
                    "duration": 110,
                    "airplane": "ATR 72",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 7164",
                    "legroom": "28 in",
                    "extensions": [
                        "Below average legroom (28 in)",
                        "Carbon emissions estimate: 61 kg"
                    ]
                },
                {
                    "departure_airport": {
                        "name": "Rajiv Gandhi International Airport",
                        "id": "HYD",
                        "time": "2024-07-17 12:00"
                    },
                    "arrival_airport": {
                        "name": "Indira Gandhi International Airport",
                        "id": "DEL",
                        "time": "2024-07-17 14:20"
                    },
                    "duration": 140,
                    "airplane": "Airbus A321neo",
                    "airline": "IndiGo",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
                    "travel_class": "Economy",
                    "flight_number": "6E 6031",
                    "legroom": "29 in",
                    "extensions": [
                        "Below average legroom (29 in)",
                        "Carbon emissions estimate: 96 kg"
                    ]
                }
            ],
            "layovers": [
                {
                    "duration": 100,
                    "name": "Rajiv Gandhi International Airport",
                    "id": "HYD"
                }
            ],
            "total_duration": 350,
            "carbon_emissions": {
                "this_flight": 158000,
                "typical_for_this_route": 157000,
                "difference_percent": 1
            },
            "price": 14631,
            "type": "Round trip",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/6E.png",
            "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZzAyUlRjeE5qUjhOa1UyTURNeEdnb0lwM0lRQUJvRFNVNVNPQnh3K29nQiIsW1siSVhFIiwiMjAyNC0wNy0xNyIsIkhZRCIsbnVsbCwiNkUiLCI3MTY0Il0sWyJIWUQiLCIyMDI0LTA3LTE3IiwiREVMIixudWxsLCI2RSIsIjYwMzEiXV1d"
        },
        {
            "flights": [
                {
                    "departure_airport": {
                        "name": "Mangaluru International Airport",
                        "id": "IXE",
                        "time": "2024-07-17 14:45"
                    },
                    "arrival_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 16:25"
                    },
                    "duration": 100,
                    "airplane": "Boeing 737MAX 8 Passenger",
                    "airline": "Air India Express",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/IX.png",
                    "travel_class": "Economy",
                    "flight_number": "IX 1296",
                    "ticket_also_sold_by": [
                        "Air India"
                    ],
                    "legroom": "30 in",
                    "extensions": [
                        "Average legroom (30 in)",
                        "In-seat USB outlet",
                        "Stream media to your device",
                        "Carbon emissions estimate: 74 kg"
                    ]
                },
                {
                    "departure_airport": {
                        "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                        "id": "BOM",
                        "time": "2024-07-17 18:00"
                    },
                    "arrival_airport": {
                        "name": "Indira Gandhi International Airport",
                        "id": "DEL",
                        "time": "2024-07-17 20:20"
                    },
                    "duration": 140,
                    "airplane": "Airbus A321",
                    "airline": "Air India",
                    "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/AI.png",
                    "travel_class": "Economy",
                    "flight_number": "AI 660",
                    "legroom": "31 in",
                    "extensions": [
                        "Average legroom (31 in)",
                        "Carbon emissions estimate: 132 kg"
                    ]
                }
            ],
            "layovers": [
                {
                    "duration": 95,
                    "name": "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
                    "id": "BOM"
                }
            ],
            "total_duration": 335,
            "carbon_emissions": {
                "this_flight": 207000,
                "typical_for_this_route": 157000,
                "difference_percent": 32
            },
            "type": "Round trip",
            "airline_logo": "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
            "departure_token": "WyJDalJJV1hSRlVVZE5MVTU0Y1dOQlQweGZiM2RDUnkwdExTMHRMUzB0YjNsalpuZ3hORUZCUVVGQlIyRk5SRlZGU0VSUU5HZEJFZ3hKV0RFeU9UWjhRVWsyTmpBNEhBPT0iLFtbIklYRSIsIjIwMjQtMDctMTciLCJCT00iLG51bGwsIklYIiwiMTI5NiJdLFsiQk9NIiwiMjAyNC0wNy0xNyIsIkRFTCIsbnVsbCwiQUkiLCI2NjAiXV1d"
        }
    
]);

  let submit = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({ ...input, [name]: value });
    // console.log(input);
  };

  let fetchdata = (e) => {
    e.preventDefault();
    try {
      const response = axios.get("https://serpapi.com/search", {
        params: {
          engine: "google_flights",
          departure_id: input.departure,
          arrival_id: input.arival,
          outbound_date: input.outboundDate,
          return_date: input.returnDate,
          currency: "INR",
          hl: "en",
          api_key:
            "6700939c5f01b59f217b907b0ad519ab96796e5cca998e789c5d3332342506da",
        },
      });
      response.then((res) => {
        console.log(res.data);

        let bflights = res.data.best_flights;
        let oflights = res.data.other_flights;

        if (bflights.length > 0) {
          setBFlight([...bflight, bflights]);
        }
        if (oflights.length > 0) {
          setOFlight([...oflight, oflights]);
        }
        console.log(bflight);
        console.log(oflight);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // useEffect(() => {

  //   fetch("http://localhost:8080/flights")
  //     .then(response => response.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <Form submit={submit} input={input} fetch={fetchdata} />
      <Views input={input} bestf={bflight} otherf={oflight} />
    </>
  );
}

export default App;
