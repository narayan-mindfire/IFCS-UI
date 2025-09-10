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
    <div>
      <div className="bg-blue-100 w-full h-14 flex justify-between items-center px-6">
        <div className="flex items-center">
          <Button className="bg-blue-500" to="/flights">
            back
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <img src={airTransat} alt="User Logo" className="h-13 w-auto" />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg w-full h-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        <div className="flex flex-col w-full md:w-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Flights</h1>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Station
              </label>
              <select className="w-40 px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select Station</option>
                <option value="YYZ">Toronto (YYZ)</option>
                <option value="YUL">Montreal (YUL)</option>
                <option value="YVR">Vancouver (YVR)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-44 px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">
                Search Flight
              </label>
              <input
                type="text"
                placeholder="Enter Flight No."
                className="w-48 px-3 py-2 border border-gray-300 rounded-lg shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10 md:gap-14 w-full md:w-auto justify-around">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-gray-800">94</h1>
            <h3 className="text-sm text-gray-500">Flights</h3>
            <FontAwesomeIcon
              icon={faPlane}
              className="text-blue-500 mt-1"
              size="lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-gray-800">0</h1>
            <h3 className="text-sm text-gray-500">Complete</h3>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-500 mt-1"
              size="lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-gray-800">0</h1>
            <h3 className="text-sm text-gray-500">In Progress</h3>
            <FontAwesomeIcon
              icon={faRotateRight}
              className="text-yellow-500 mt-1"
              size="lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold text-gray-800">94</h1>
            <h3 className="text-sm text-gray-500">Waiting</h3>
            <FontAwesomeIcon
              icon={faClock}
              className="text-blue-500 mt-1"
              size="lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg overflow-hidden">
        <div className="grid grid-cols-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm font-bold sticky top-0 z-20">
          <div className="col-span-8 flex items-center justify-center gap-2 py-4 border-r border-gray-700">
            <FontAwesomeIcon icon={faPlane} className="text-blue-400" />
            <span>Flight Information</span>
          </div>
          <div className="col-span-2 flex items-center justify-center gap-2 py-4 border-r border-gray-700">
            <FontAwesomeIcon icon={faCogs} className="text-green-400" />
            <span>Aircraft</span>
          </div>
          <div className="col-span-1 flex items-center justify-center gap-2 py-4 border-r border-gray-700">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="text-yellow-400"
            />
            <span>Plans</span>
          </div>
          <div className="col-span-5 flex items-center justify-center gap-2 py-4 border-r border-gray-700">
            <FontAwesomeIcon icon={faUsers} className="text-purple-400" />
            <span>PAX</span>
          </div>
          <div className="col-span-4 flex items-center justify-center gap-2 py-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-red-400" />
            <span>Status</span>
          </div>
        </div>

        <div className="grid grid-cols-20 bg-gray-100 text-xs font-semibold border-b border-gray-300">
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Airline</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Route</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Flight</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Type</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Date</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Departure</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Arrival</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Status</div>
          </div>

          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">AC Type</div>
            <div className="font-semibold">AC Reg</div>
          </div>
          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Ground Time</div>
          </div>

          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Loading</div>
            <div className="font-semibold">Meal Plan</div>
          </div>

          <div className="col-span-1 text-center py-3 border-r border-gray-300">
            <div className="font-semibold">Total</div>
          </div>
          <div className="col-span-4 grid grid-cols-1 text-center border-r border-gray-300">
            <div className="py-3 border-r border-gray-300">
              <div className="font-semibold">Configuration</div>
            </div>
          </div>

          <div className="col-span-4 text-center py-3"></div>
        </div>

        <div className="divide-y divide-gray-400 overflow-y-auto max-h-[calc(100vh-14rem)]">
          {flights.map((pair, idx) => (
            <div key={idx} className="mb-4">
              {pair.map((flight, subIdx) => (
                <FlightRow key={subIdx} {...flight} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <footer className="w-full flex items-center bg-gray-400 h-6 fixed bottom-0 z-10">
        <img src={galleyXplanner} alt="Bottom Logo" className="w-32" />
      </footer>
    </div>
  );
}

export default FlightList;
