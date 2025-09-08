import sky from "../../assets/sky.png";
import IFCSLogo from "../../assets/logos/IFCSLogo.png";
import galleyLogo2 from "../../assets/logos/galleyLogo2.png";
import airTransat from "../../assets/logos/airTransat.png";
import Button from "../../components/Button";

const Login: React.FC = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${sky})` }}
    >
      <div className="flex flex-col justify-between bg-white/40 rounded-xl p-5 w-[calc(100vw-40px)] h-[calc(100vh-40px)]">
        <main className="flex items-center justify-center gap-20 flex-1">
          <div className="flex flex-col items-center text-white drop-shadow-md">
            <div className="text-center">
              <img src={IFCSLogo} alt="IFCS Logo" className="rounded-xl w-60" />
            </div>
            <div className="text-center -mt-15">
              <img
                src={airTransat}
                alt="Air Transat Logo"
                className="w-30 h-30 object-contain"
              />
            </div>
          </div>

          <div className="w-80 rounded-xl bg-white/45 p-10 shadow-2xl">
            <form>
              <div className="mb-5">
                <label
                  htmlFor="login-name"
                  className="mb-2 block text-sm text-gray-700"
                >
                  Login Name
                </label>
                <input
                  type="text"
                  id="login-name"
                  className="w-full rounded-md border border-gray-300  bg-[var(--backgroundLight)] p-3"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-md border border-gray-300  bg-[var(--backgroundLight)] p-3"
                />
              </div>
              <a
                href="#"
                className="-mt-3 mb-6 block text-right text-xs  no-underline hover:underline"
              >
                Forgot Password
              </a>
              <div className="flex items-center justify-between">
                <Button>Exit</Button>
                <Button to="/dashboard">Sign In</Button>
              </div>
            </form>
          </div>
        </main>

        <footer className="text-white drop-shadow-md mt-5">
          <img
            src={galleyLogo2}
            alt="Galley Logo"
            className="rounded-xl w-20 h-auto"
          />
        </footer>
      </div>
    </div>
  );
};

export default Login;
