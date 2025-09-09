import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faClipboardList,
  faUtensils,
  faSuitcaseRolling,
  faExclamationTriangle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

interface PaxData {
  first: string;
  business: string;
  premium: string;
  economy: string;
}

export interface Flight {
  airlineCode: string;
  route: string;
  flightNumber: string;
  type: string;
  date: string;
  departure: string;
  arrival: string;
  depStation: string;
  arrStation: string;
  status: string;
  acType: string;
  acReg: string;
  groundTime: string;
  plan: string;
  paxTotal: number;
  pax: PaxData;
}

const FlightRow: React.FC<Flight> = ({
  airlineCode,
  route,
  flightNumber,
  type,
  date,
  departure,
  arrival,
  depStation,
  arrStation,
  status,
  acType,
  acReg,
  groundTime,
  plan,
  paxTotal,
  pax,
}) => {
  const logoUrl = `https://content.airhex.com/content/logos/airlines_${airlineCode}_100_100_s.png`;
  const getStatusClasses = (status: string) => {
    switch (status.toLowerCase()) {
      case "scheduled":
      case "on time":
        return "bg-blue-100 text-blue-700";
      case "departed":
        return "bg-green-100 text-green-700";
      case "delayed":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="grid grid-cols-20 items-center border-b border-gray-200 py-3 text-sm hover:bg-gray-50 transition-colors">
      <div className="col-span-1 flex justify-center px-2">
        <img
          src={logoUrl}
          alt={airlineCode}
          className="h-8 w-8 object-contain"
        />
      </div>
      <div className="col-span-1 text-center px-2 font-medium">{route}</div>
      <div className="col-span-1 text-center px-2 font-bold text-blue-600">
        {flightNumber}
      </div>
      <div className="col-span-1 text-center px-2">{type}</div>
      <div className="col-span-1 text-center px-2">{date}</div>
      <div className="col-span-1 text-center px-2">
        <div className="text-sm font-medium">{departure}</div>
        <div className="text-xs text-gray-500">{depStation}</div>
      </div>
      <div className="col-span-1 text-center px-2">
        <div className="text-sm font-medium">{arrival}</div>
        <div className="text-xs text-gray-500">{arrStation}</div>
      </div>
      <div className="col-span-1 text-center px-2">
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusClasses(
            status
          )}`}
        >
          {status}
        </span>
      </div>

      <div className="col-span-1 text-center px-2">
        <div className="text-sm font-medium">{acType}</div>
        <div className="text-xs text-gray-500">{acReg}</div>
      </div>
      <div className="col-span-1 text-center px-2 text-sm">{groundTime}</div>

      <div className="col-span-1 text-center px-2 text-sm">{plan}</div>

      <div className="col-span-1 text-center px-2 font-semibold text-lg">
        {paxTotal}
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-1 px-2">
        <div className="text-center">
          <div className="text-xs text-gray-500">F</div>
          <div className="text-sm font-medium">{pax.first}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">J</div>
          <div className="text-sm font-medium">{pax.business}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">W</div>
          <div className="text-sm font-medium">{pax.premium}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-gray-500">Y</div>
          <div className="text-sm font-medium">{pax.economy}</div>
        </div>
      </div>

      <div className="col-span-4 flex gap-3 justify-center text-gray-400 px-2">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="hover:text-yellow-500 cursor-pointer transition-colors"
        />
        <FontAwesomeIcon
          icon={faUtensils}
          className="hover:text-blue-500 cursor-pointer transition-colors"
        />
        <FontAwesomeIcon
          icon={faClipboardList}
          className="hover:text-green-500 cursor-pointer transition-colors"
        />
        <FontAwesomeIcon
          icon={faSuitcaseRolling}
          className="hover:text-purple-500 cursor-pointer transition-colors"
        />
        <FontAwesomeIcon
          icon={faPlane}
          className="hover:text-blue-600 cursor-pointer transition-colors"
        />
        <FontAwesomeIcon
          icon={faCog}
          className="text-red-500 hover:text-red-700 cursor-pointer transition-colors"
        />
      </div>
    </div>
  );
};
export default FlightRow;
