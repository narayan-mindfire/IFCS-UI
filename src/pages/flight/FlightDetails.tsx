import { useParams } from "react-router-dom";
import { useState } from "react";
import { flights } from "../../const/flightData";
import FlightPreparations from "../../components/flight/FlightPreparations";
import Button from "../../components/Button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlightFoodOrder from "../../components/flight/FlightFoodOrder";
import FlightGalleys from "../../components/flight/FlightGalleys";
import FlightContLoc from "../../components/flight/FlightContLoc";
import FlightDeliveries from "../../components/flight/FlightDeliveries";

const tabs = [
  "DETAILS",
  "PREPARATIONS",
  "FOOD ORDERS",
  "CONTENT LOC'N",
  "GALLEYS",
  "LABELS/REPORTS",
  "DELIVERIES",
  "INVOICE",
];

function FlightDetails() {
  const { flightNumber } = useParams<{ flightNumber: string }>();
  const [activeTab, setActiveTab] = useState("DETAILS");

  const flight = flights.flat().find((f) => f.flightNumber === flightNumber);

  if (!flight) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-red-600">Flight not found</h1>
      </div>
    );
  }

  return (
    <div className="p-4 sm:py-0">
      <nav className="w-full bg-white h-16 flex items-center justify-between ">
        <Button className="bg-blue-500" to="/flight-list">
          <div className="flex flex-row justify-center items-center">
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
            <p>Flights</p>
          </div>
        </Button>
      </nav>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow rounded-xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-800 mb-2">
            Flight {flight.flightNumber}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium">
            {flight.airlineCode} • {flight.type}
          </p>
          <p className="text-sm text-gray-500">
            {flight.date} |{" "}
            <span className="font-semibold">{flight.status}</span>
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs sm:text-sm text-gray-500">Route</p>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            {flight.depStation} → {flight.arrStation}
          </h2>
          <p className="text-sm text-gray-600">
            Dep <span className="font-medium">{flight.departure}</span> • Arr{" "}
            <span className="font-medium">{flight.arrival}</span>
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex md:grid md:grid-cols-8 gap-2 bg-blue-600 rounded-lg shadow overflow-hidden min-w-max md:min-w-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-600 shadow-md"
                  : "text-white hover:bg-blue-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 min-w-full min-h-[250px]">
        {activeTab === "DETAILS" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-gray-800">
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase">
                Aircraft
              </h3>
              <p className="text-base sm:text-lg font-semibold">
                {flight.acType}
              </p>
              <p className="text-sm text-gray-500">{flight.acReg}</p>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase">
                Ground Time
              </h3>
              <p className="text-base sm:text-lg font-semibold">
                {flight.groundTime}
              </p>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase">
                Plan
              </h3>
              <p className="text-base sm:text-lg font-semibold">
                {flight.plan}
              </p>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase">
                Passengers
              </h3>
              <p className="text-base sm:text-lg font-semibold">
                {flight.paxTotal} total
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                <span className="font-medium text-yellow-600">F:</span>{" "}
                {flight.pax.first} |{" "}
                <span className="font-medium text-blue-600">C:</span>{" "}
                {flight.pax.business} |{" "}
                <span className="font-medium text-purple-600">P:</span>{" "}
                {flight.pax.premium} |{" "}
                <span className="font-medium text-green-600">Y:</span>{" "}
                {flight.pax.economy}
              </p>
            </div>
          </div>
        )}

        {activeTab !== "DETAILS" && (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-gray-500 italic text-sm sm:text-lg">
              {activeTab === "PREPARATIONS" && <FlightPreparations />}
              {activeTab === "FOOD ORDERS" && <FlightFoodOrder />}
              {activeTab === "GALLEYS" && <FlightGalleys />}
              {activeTab === "CONTENT LOC'N" && <FlightContLoc />}
              {activeTab === "DELIVERIES" && <FlightDeliveries />}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightDetails;
