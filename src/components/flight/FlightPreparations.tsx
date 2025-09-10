import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faCogs,
  faLock,
  faCheckCircle,
  faTruck,
  faInfoCircle,
  faQrcode,
  faBoxOpen,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { samplePreparations } from "../../const/samplePreparations";
import Button from "../Button";

function FlightPreparations() {
  const tableRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (tableRef.current) {
      const printContents = tableRef.current.innerHTML;
      const printWindow = window.open("", "", "width=900,height=650");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Flight Preparations</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background: #f5f5f5; }
                .no-print { display: none; }
              </style>
            </head>
            <body>
              ${printContents}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-700">
          Flight Preparation: {samplePreparations.length}
        </h2>
        <div className="flex flex-row items-center gap-4">
          <FontAwesomeIcon
            icon={faCogs}
            className="cursor-pointer text-red-500"
          />
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 cursor-pointer text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FontAwesomeIcon icon={faPrint} />
            Print
          </button>
        </div>
      </div>

      <div ref={tableRef}>
        <div className="max-h-[50vh] overflow-y-auto">
          <table className="min-w-full w-full table-fixed border border-gray-200 text-sm border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase text-s sticky top-0 z-10">
              <tr>
                <th className="px-3 py-2 text-left">Stowage</th>
                <th className="px-3 py-2 text-left">Carrier</th>
                <th className="px-3 py-2 text-left">Equipment</th>
                <th className="px-3 py-2 text-left">Prepared By</th>
                <th className="px-3 py-2 text-center no-print">Actions</th>
              </tr>
            </thead>
            <tbody>
              {samplePreparations.map((prep, idx) => (
                <tr
                  key={idx}
                  className={`border-b ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-3 py-2 font-medium">{prep.stowage}</td>
                  <td className="px-3 py-2">{prep.carrier}</td>
                  <td className="px-3 py-2">{prep.equipment}</td>
                  <td className="px-3 py-2">{prep.preparedBy}</td>
                  <td className="px-3 py-2 flex justify-center gap-3 text-gray-600 no-print">
                    <FontAwesomeIcon
                      icon={faQrcode}
                      className="cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faBoxOpen}
                      className="cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="cursor-pointer"
                    />
                    <FontAwesomeIcon icon={faLock} className="cursor-pointer" />
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="cursor-pointer text-green-500"
                    />
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="cursor-pointer text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="cursor-pointer text-gray-500"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FlightPreparations;
