import { assets } from "../assets/assets";
import { Footer } from "../components/Footer";

export const Course = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
        <div className="my-20 bg-[#F5F5F5]">
          <div>
            <div className="flex gap-x-2 items-center">
              <h1 className="font-semibold text-lg text-[#3E3E3E]">
                All Courses
              </h1>
              <img src={assets.side_arrow} alt="" className="h-3.5" />
            </div>
            <div className="mt-10 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 w-full">
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                <div className="w-full h-44">
                  <img
                    src={assets.web_course}
                    alt=""
                    className="w-full object-cover h-full rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-[#373636] font-semibold mt-2">
                    Full Stack Web Development
                  </h1>
                  <p className="text-[#686868] h-12">
                    Learn to build a full stack web application from scratch
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-[#373636] font-semibold">$ 100</h1>
                    <button className="bg-[#C2F578] text-[#373636] font-semibold px-4 py-1 rounded-md">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                <div className="w-full h-44">
                  <img
                    src={assets.data_course}
                    alt=""
                    className="w-full object-cover h-full rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-[#373636] font-semibold mt-2">
                    Data Science
                  </h1>
                  <p className="text-[#686868] h-12">
                    Learn to analyze data and build predictive models
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-[#373636] font-semibold">$ 400</h1>
                    <button className="bg-[#C2F578] text-[#373636] font-semibold px-4 py-1 rounded-md">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                <div className="w-full h-44">
                  <img
                    src={assets.ui_course}
                    alt=""
                    className="w-full object-cover h-full rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-[#373636] font-semibold mt-2">
                    UI/UX Design
                  </h1>
                  <p className="text-[#686868] h-12">
                    Learn to design beautiful user interfaces{" "}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-[#373636] font-semibold">$ 800</h1>
                    <button className="bg-[#C2F578] text-[#373636] font-semibold px-4 py-1 rounded-md">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#ECEDEF] w-full rounded-md  p-2">
                <div className="w-full h-44">
                  <img
                    src={assets.html_course}
                    alt=""
                    className="w-full object-cover h-full rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-[#373636] font-semibold mt-2">
                    HTML in 20 minutes
                  </h1>
                  <p className="text-[#686868] h-12">
                    Learn to design beautiful user interfaces{" "}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-[#373636] font-semibold">$ 200</h1>
                    <button className="bg-[#C2F578] text-[#373636] font-semibold px-4 py-1 rounded-md">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
