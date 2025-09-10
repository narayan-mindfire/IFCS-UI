import FlightCard from "../../components/cards/FlightCard";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardMetrics from "../../components/DashboardMetrics";

function Dashboard() {
  return (
    <>
      <DashboardHeader userName="Shitanshu" />
      <DashboardMetrics />

      <div className="flex flex-row justify-around mt-10">
        <FlightCard
          flightNumber="WY101"
          departureTime="6:10 PM"
          departureAirport="LHR"
          arrivalTime="10:15 AM"
          arrivalAirport="MCT"
          totalPassengers={525}
          economyPassengers={485}
          businessPassengers={40}
        />
        <FlightCard
          flightNumber="WY101"
          departureTime="6:10 PM"
          departureAirport="LHR"
          arrivalTime="10:15 AM"
          arrivalAirport="MCT"
          totalPassengers={525}
          economyPassengers={485}
          businessPassengers={40}
        />
        <FlightCard
          flightNumber="WY101"
          departureTime="6:10 PM"
          departureAirport="LHR"
          arrivalTime="10:15 AM"
          arrivalAirport="MCT"
          totalPassengers={525}
          economyPassengers={485}
          businessPassengers={40}
        />
      </div>
    </>
  );
}

export default Dashboard;
