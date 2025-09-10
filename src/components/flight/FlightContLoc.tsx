import { useState } from "react";
import { galleryItems } from "../../const/galleyItems";

const FlightContLoc = () => {
  const [selectedItem, setSelectedItem] = useState(galleryItems[0]);
  const [activeContentTab, setActiveContentTab] = useState("static");

  return (
    <div className=" bg-white w-400 shadow rounded-lg p-4">
      <div className="flex bg-white ">
        <button
          className={`px-8 py-3 rounded-t-lg mx-1 ${
            activeContentTab === "static"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveContentTab("static")}
        >
          Static Content
        </button>
        <button
          className={`px-8 py-3 rounded-t-lg mx-1 ${
            activeContentTab === "dynamic"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 opacity-60"
          }`}
          disabled
        >
          Dynamic Content
        </button>
        <button
          className={`px-8 py-3 rounded-t-lg mx-1 ${
            activeContentTab === "deadhead"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600 opacity-60"
          }`}
          disabled
        >
          Dead Head
        </button>
      </div>

      <div className="flex bg-gray-200 flex-1 w-full gap-4 p-4">
        <div className="flex-1 bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium text-gray-700">Items</h2>
          </div>
          <div className="overflow-y-auto h-full">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className={`p-3 cursor-pointer border-b hover:bg-gray-50 ${
                  selectedItem.id === item.id
                    ? "bg-blue-100 border-l-4 border-l-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="text-sm text-gray-800">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[2] space-y-4">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-blue-500">Details</h2>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-2">
                {selectedItem.details.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {selectedItem.details.description}
              </p>
              <p className="text-sm text-gray-500">
                {selectedItem.details.subtitle}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium text-blue-500">
                Galley Locations
              </h2>
            </div>
            <div className="p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 text-gray-500">Name</th>
                      <th className="text-left py-2 text-gray-500">Storage</th>
                      <th className="text-right py-2 text-gray-500">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItem.locations.map((location, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 text-gray-700">{location.name}</td>
                        <td className="py-2 text-gray-700">
                          {location.storage}
                        </td>
                        <td className="py-2 text-right text-gray-700">
                          {location.qty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm">
          <div className="p-4 h-full flex flex-col items-center justify-center">
            <div className="relative">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-xs text-gray-500 mb-4">
                  Aircraft Galley Layout
                </div>

                {/* <div className="relative">
                  <div className="w-12 h-20 bg-purple-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G1</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <div className="relative">
                    <div className="w-12 h-16 bg-purple-700 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G2A</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-16 bg-purple-800 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G2</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-1">
                  <div className="flex flex-col space-y-0.5">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-sm"
                      ></div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-0.5">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-cyan-400 rounded-sm"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-4">
                  <div className="w-12 h-20 bg-purple-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G4</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-4">
                  <div className="px-3 py-1 bg-purple-800 text-white text-xs rounded-full">
                    BULK
                  </div>
                  <div className="px-3 py-1 bg-purple-800 text-white text-xs rounded-full">
                    BELLY
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightContLoc;
