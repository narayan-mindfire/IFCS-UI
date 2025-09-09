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
      <div className="bg-red w-full h-12 flex justify-between items-center px-6">
        <div className="flex items-center">
          <Button to="/flights">back</Button>
        </div>

        <div className="flex items-center gap-4">
          <img src={airTransat} alt="User Logo" className="h-13 w-auto" />
        </div>
      </div>

      <div className="bg-red w-full h-16 flex justify-between items-center px-6 my-3">
        <div className="flex flex-col ">
          <h1>Flights</h1>
          <div className="flex flex-row gap-4">
            <div className="w-16 h-6 flex justify-center items-center bg-black text-white">
              a
            </div>
            <div className="w-16 h-6 flex justify-center items-center bg-black text-white">
              b
            </div>
            <div className="w-16 h-6 flex justify-center items-center bg-black text-white">
              c
            </div>
          </div>
        </div>

        <div className="flex items-center gap-14">
          <div className="flex flex-col items-center justify-center">
            <h1>94</h1>
            <h3>Flights</h3>
            <FontAwesomeIcon
              icon={faPlane}
              className="text-blue-400"
              size="xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>0</h1>
            <h3>Complete</h3>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-green-400"
              size="xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>0</h1>
            <h3>In Progress</h3>
            <FontAwesomeIcon
              icon={faRotateRight}
              className="text-yellow-400"
              size="xl"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1>94</h1>
            <h3>Waiting</h3>
            <FontAwesomeIcon
              icon={faClock}
              className="text-blue-400"
              size="xl"
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
            <span>Passengers</span>
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
          <div className="col-span-4 grid grid-cols-4 text-center border-r border-gray-300">
            <div className="py-3 border-r border-gray-300">
              <div className="font-semibold text-yellow-600">First Class</div>
            </div>
            <div className="py-3 border-r border-gray-300">
              <div className="font-semibold text-blue-600">Business</div>
            </div>
            <div className="py-3 border-r border-gray-300">
              <div className="font-semibold text-purple-600">Premium</div>
            </div>
            <div className="py-3">
              <div className="font-semibold text-green-600">Economy</div>
            </div>
          </div>

          <div className="col-span-4 text-center py-3"></div>
        </div>

        <div className="divide-y divide-gray-200 overflow-y-auto max-h-[600px] pb-10">
          {flights.map((flight, idx) => (
            <FlightRow key={idx} {...flight} />
          ))}
        </div>
      </div>
      <footer className="w-full flex items-center bg-gray-400 h-10 fixed bottom-0 z-10">
        <img src={galleyXplanner} alt="Bottom Logo" className="w-32" />
      </footer>
    </div>
  );
}

export default FlightList;
