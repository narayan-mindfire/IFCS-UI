import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Delivery = {
  id: number;
  name: string;
};

const FlightDeliveries = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const addDelivery = () => {
    const newDelivery: Delivery = {
      id: deliveries.length + 1,
      name: `Delivery ${deliveries.length + 1}`,
    };
    setDeliveries([...deliveries, newDelivery]);
  };

  return (
    <div className="w-400 h-full flex justify-between gap-4">
      <div className="w-72 bg-white rounded-xl shadow p-4 flex flex-col">
        <div className="flex items-center justify-between border-b pb-2 mb-2">
          <h2 className="text-blue-400 font-semibold">Delivery:</h2>
          <button
            onClick={addDelivery}
            className="text-blue-400 hover:text-blue-800"
          >
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
        </div>
        <p className="text-sm text-gray-500 italic">Add new deliveries here</p>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow p-4">
        {deliveries.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 italic">
            No deliveries yet. Click + to add one.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm"
              >
                <h3 className="text-blue-700 font-bold">{delivery.name}</h3>
                <p className="text-sm text-gray-600">Delivery details here</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDeliveries;
