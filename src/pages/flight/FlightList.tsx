import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faCogs,
  faClipboardList,
  faUsers,
  faCheckCircle,
  faRotateRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import airTransat from "../../assets/logos/airTransat.png";
import FlightRow from "../../components/flight/FlightRow";
import { flights } from "../../const/flightData";
import Button from "../../components/Button";
import galleyXplanner from "../../assets/logos/galleyXplanner.png";

function FlightList() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-blue-100 w-full h-16 flex justify-between items-center px-8">
        <div className="flex items-center">
          <Button
            className="bg-blue-500 text-white px-4 py-2 text-base font-semibold rounded-lg"
            to="/flights"
          >
            Back
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <img src={airTransat} alt="User Logo" className="h-14 w-auto" />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full flex flex-col md:flex-row justify-between items-center px-8 py-6 gap-6">
        <div className="flex flex-col w-full md:w-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Flights</h1>
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Station
              </label>
              <select className="w-48 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Station</option>
                <option value="YYZ">Toronto (YYZ)</option>
                <option value="YUL">Montreal (YUL)</option>
                <option value="YVR">Vancouver (YVR)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-52 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Search Flight
              </label>
              <input
                type="text"
                placeholder="Enter Flight No."
                className="w-56 px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12 md:gap-16 w-full md:w-auto justify-around">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800">94</h1>
            <h3 className="text-base text-gray-500">Flights</h3>
            <FontAwesomeIcon
              icon={faPlane}
              className="text-blue-400 mt-2"
              size="2x"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800">0</h1>
            <h3 className="text-base text-gray-500">Complete</h3>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-2"
              size="2x"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800">0</h1>
            <h3 className="text-base text-gray-500">In Progress</h3>
            <FontAwesomeIcon
              icon={faRotateRight}
              className="text-yellow-500 mt-2"
              size="2x"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800">94</h1>
            <h3 className="text-base text-gray-500">Waiting</h3>
            <FontAwesomeIcon
              icon={faClock}
              className="text-blue-400 mt-2"
              size="2x"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg overflow-hidden mt-6">
        <div className="grid grid-cols-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-base font-bold sticky top-0 z-20">
          <div className="col-span-8 flex items-center justify-center gap-2 py-5 border-r border-gray-700">
            <FontAwesomeIcon icon={faPlane} className="text-blue-400" />
            <span>Flight Information</span>
          </div>
          <div className="col-span-2 flex items-center justify-center gap-2 py-5 border-r border-gray-700">
            <FontAwesomeIcon icon={faCogs} className="text-green-400" />
            <span>Aircraft</span>
          </div>
          <div className="col-span-1 flex items-center justify-center gap-2 py-5 border-r border-gray-700">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="text-yellow-400"
            />
            <span>Plans</span>
          </div>
          <div className="col-span-5 flex items-center justify-center gap-2 py-5 border-r border-gray-700">
            <FontAwesomeIcon icon={faUsers} className="text-purple-400" />
            <span>PAX</span>
          </div>
          <div className="col-span-4 flex items-center justify-center gap-2 py-5">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-400" />
            <span>Status</span>
          </div>
        </div>

        {/* Column Labels */}
        <div className="grid grid-cols-20 bg-gray-100 text-sm font-semibold border-b border-gray-300">
          {[
            "Airline",
            "Route",
            "Flight",
            "Type",
            "Date",
            "Departure",
            "Arrival",
            "Status",
            "AC Type / Reg",
            "Ground Time",
            "Meal Plan",
            "Total",
            "Configuration",
            "",
          ].map((label, idx) => (
            <div
              key={idx}
              className={`text-center py-4 border-r border-gray-300 ${
                idx === 13
                  ? "col-span-4"
                  : idx === 12
                  ? "col-span-4 grid grid-cols-1"
                  : "col-span-1"
              }`}
            >
              <div className="font-semibold text-base">{label}</div>
            </div>
          ))}
        </div>

        <div className="divide-y divide-gray-400 overflow-y-auto max-h-[calc(100vh-14rem)] text-base">
          {flights.map((pair, idx) => (
            <div key={idx} className="mb-4">
              {pair.map((flight, subIdx) => (
                <FlightRow key={subIdx} {...flight} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full flex items-center bg-gray-400 h-8 fixed bottom-0 z-10">
        <img src={galleyXplanner} alt="Bottom Logo" className="w-40" />
      </footer>
    </div>
  );
}

export default FlightList;
