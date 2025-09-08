import dashBg from "../assets/dashBg.png";

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  const buttons = [
    "Documents",
    "Memos",
    "Support Tickets",
    "Scorecard",
    "System Messages",
    "Compliance",
  ];

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="relative w-full h-64 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${dashBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <div className="text-white">
            <p className="text-sm">Welcome</p>
            <h1 className="text-4xl font-bold">{userName}</h1>
          </div>
          <div className="bg-white text-gray-800 text-sm px-3 py-1 rounded-md">
            {formattedDate}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="bg-white/5 backdrop-blur-sm hover:bg-white/10 font-extrabold h-24 text-xl text-white px-4 py-2 rounded-md border border-white transition-colors duration-300"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
