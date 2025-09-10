import { useState } from "react";
import GalleyLabel from "../GalleyLabel";

const FlightLabels = () => {
  const [activeTab, setActiveTab] = useState("LABELS");

  const sampleFlight = {
    airlineCode: "WY",
    route: "MCT-MNL-MCT",
    flightNumber: "WY843",
    type: "A40SK",
    date: "SEP8 [NA]",
    departure: "10:30",
    arrival: "18:45",
    depStation: "MCT",
    arrStation: "MNL",
    status: "Active",
    acType: "A40SK",
    acReg: "A40SK",
    groundTime: "2h 15m",
    plan: "ATLAS",
    paxTotal: 180,
    pax: {
      first: "12",
      business: "24",
      premium: "36",
      economy: "108",
    },
  };

  const outboundPreparations = [
    {
      stowage: "101T",
      carrier: "JC Headsets",
      equipment: "Dry Stores",
      preparedBy: "John Smith",
    },
    {
      stowage: "102T",
      carrier: "JC Oven",
      equipment: "Tray Set Up",
      preparedBy: "Sarah Johnson",
    },
  ];

  const inboundPreparations = [
    {
      stowage: "201T",
      carrier: "1.5 LT Water",
      equipment: "Dry Stores",
      preparedBy: "Mike Wilson",
    },
  ];

  const currentDate = new Date().toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("LABELS")}
          className={`px-6 py-2 rounded-l-lg font-medium text-sm ${
            activeTab === "LABELS"
              ? "bg-gray-400 text-black"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          LABELS
        </button>
        <button
          onClick={() => setActiveTab("REPORTS")}
          className={`px-6 py-2 rounded-r-lg font-medium text-sm ${
            activeTab === "REPORTS"
              ? "bg-gray-400 text-black"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          REPORTS
        </button>
      </div>

      <div className="text-xs text-gray-500 mb-6">Generated {currentDate}</div>

      {activeTab === "LABELS" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Print Outbound Labels
            </h3>

            <div className="space-y-4">
              {outboundPreparations.map((prep, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <GalleyLabel preparation={prep} flight={sampleFlight} />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-medium text-gray-800">
                      {prep.equipment}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Stowage: {prep.stowage} | Prepared by: {prep.preparedBy}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                <div className="w-2 h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Print Inbound Labels
            </h3>

            <div className="space-y-4">
              {inboundPreparations.map((prep, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <GalleyLabel
                      preparation={{
                        ...prep,
                        carrier: prep.carrier.replace(
                          "1.5 LT Water",
                          "1.5 LT Water X8"
                        ),
                      }}
                      flight={sampleFlight}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-medium text-gray-800">
                      {prep.equipment}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Stowage: {prep.stowage} | Prepared by: {prep.preparedBy}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 rounded flex items-center justify-center">
                <div className="w-2 h-4 bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "REPORTS" && (
        <div className="bg-white rounded-lg p-8 text-center">
          <div className="text-gray-500">
            <h3 className="text-lg font-medium mb-2">Reports Section</h3>
            <p>
              Report generation and management tools will be available here.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightLabels;
