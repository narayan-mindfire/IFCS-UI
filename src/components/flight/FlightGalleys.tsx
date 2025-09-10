import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";

type PreparedBy = string;
type Item = {
  code: string;
  label: string;
  qty: number;
};

const preparedByList: PreparedBy[] = [
  "Dry Stores",
  "Spare",
  "Bond Stores",
  "Tray Set Up",
];

const itemsList: Item[] = [
  { code: "CN007", label: "JC Headsets X12", qty: 2 },
  { code: "CN030", label: "Ice", qty: 2 },
  { code: "CT060", label: "B737 Holloware ISC-MEA", qty: 1 },
  { code: "CT059", label: "JC ISC - MEA NB Spare", qty: 1 },
  { code: "OV002", label: "JC Oven", qty: 1 },
  { code: "CN033", label: "JC Dry store NB", qty: 1 },
  { code: "CT107", label: "YC 2nd Service", qty: 1 },
  { code: "CT070", label: "WC 737 Bulk Food", qty: 1 },
  { code: "CT064", label: "JC 1st Service OB TSU", qty: 1 },
];

const FlightGalleys = () => {
  const [preparedBy] = useState(preparedByList);
  const [items] = useState(itemsList);

  return (
    <div className="flex w-400 bg-gray-200 gap-4 p-4">
      <div className="w-72 rounded-xl bg-white shadow p-4">
        <h2 className="text-blue-600 font-semibold mb-3">Prepared By:</h2>
        <div className="overflow-y-auto max-h-96 space-y-2">
          {preparedBy.map((prep, idx) => (
            <div
              key={idx}
              className="p-2 rounded-md shadow-sm border hover:bg-gray-50 cursor-pointer"
            >
              {prep}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow p-4">
        <h2 className="text-blue-600 font-semibold mb-3">Items</h2>
        <div className="overflow-y-auto max-h-96">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="text-left py-2 px-2">Code</th>
                <th className="text-left py-2 px-2">Label</th>
                <th className="text-right py-2 px-2">Qty</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2 px-2">{item.code}</td>
                  <td className="py-2 px-2">{item.label}</td>
                  <td className="py-2 px-2 text-right">{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-48 flex flex-col gap-3">
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition">
          Show All
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          <FontAwesomeIcon icon={faBoxesPacking} />
          View Galleys
        </button>
      </div>
    </div>
  );
};

export default FlightGalleys;
