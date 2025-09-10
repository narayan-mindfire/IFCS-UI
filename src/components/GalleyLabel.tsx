import type { FC } from "react";
import { QRCodeSVG } from "qrcode.react";

type PreparationData = {
  stowage: string;
  carrier: string;
  equipment: string;
  preparedBy: string;
};

type FlightData = {
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
  pax: {
    first: string;
    business: string;
    premium: string;
    economy: string;
  };
};

interface LabelProps {
  preparation: PreparationData;
  flight: FlightData;
}

const GalleyLabel: FC<LabelProps> = ({ preparation, flight }) => {
  const qrData = JSON.stringify({
    stowage: preparation.stowage,
    carrier: preparation.carrier,
    preparedBy: preparation.preparedBy,
    flightNumber: flight.flightNumber,
    route: flight.route,
  });

  const airlineLogoUrl = `https://content.airhex.com/content/logos/airlines_${flight.airlineCode}_200_60_r.png`;

  return (
    <div className="border-2 border-black w-[340px] text-black font-sans bg-white">
      <div className="flex items-center justify-between border-b-2 border-black px-2 py-2">
        <div className="flex flex-col items-start w-20">
          <img
            src={airlineLogoUrl}
            alt={`${flight.airlineCode} logo`}
            className="h-8 object-contain mb-2"
          />
          <div className="bg-black text-white px-2 py-1 text-lg font-bold w-full text-center">
            {flight.flightNumber}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <QRCodeSVG value={qrData} size={120} />
        </div>

        <div className="flex flex-col items-end w-20">
          <span className="text-sm font-bold mb-2">{flight.date}</span>
          <div className="bg-black text-white px-2 py-1 text-lg font-bold w-full text-center">
            {preparation.stowage}
          </div>
        </div>
      </div>

      <div className="border-b-2 border-black px-2 py-1 text-center text-sm">
        <div className="font-medium">
          {flight.acReg} | {flight.route} | {preparation.equipment}
        </div>
        <div className="mt-1 text-xs">
          {flight.depStation} / {flight.arrStation}
        </div>
      </div>

      <div className="px-4 py-8 text-center">
        <div className="font-bold text-4xl leading-tight">
          {preparation.carrier}
        </div>
      </div>
    </div>
  );
};

export default GalleyLabel;
