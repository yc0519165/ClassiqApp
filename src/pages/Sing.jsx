import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Sing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
        <div className="h-[85vh] flex items-center justify-center">
          <div className="bg-[#ECEDEF] flex flex-col items-center py-7 px-14 rounded-2xl">
            <h1 className="text-xl font- text-center">Sing Up</h1>
            <form action="" className="mt-6">
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="yc0519165@gmail.com"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Yuvraj Chavhan"
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
                />
              </div>
              <button className="w-full py-2 mt-4 text-black bg-[#c2f578] rounded-md hover:bg-[#a5cf66] transition-colors ease-linear hover:text-black">
                SingUp
              </button>
            </form>
            <span className="text-center text-sm pt-5">
              Already have an account?
              <a
                onClick={() => navigate("/login")}
                className="cursor-pointer underline"
              >
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
