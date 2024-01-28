import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Range } from "react-range";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Shops = () => {
  const [filter, setFilter] = useState(true);

  const categories = [
    "Rice",
    "Onions",
    "Sugar",
    "Wheat",
    "Potatoes",
    "Tomatoes",
    "Eggs",
  ];

  //   const []

  return (
    <div>
      <Header />
      <section className="bg-[url('http://localhost:3000/assets/images/banner/1.png')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Agro</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 ">
        <div className="w-[85%] md:w-[90%] sm:w-[90%] lg:w-[90%] h-full  mx-auto">
          <div className={`md:block hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
            >
              Filter Product
            </button>
          </div>
          <div className="w-full flex flex-wrap">
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-full pr-8 ${
                filter
                  ? "md:h-0 md:overflow-hidden mb:mb-6"
                  : "md:h-auto md:overflow-auto md:mb-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-3 text-slate-600">
                Category
              </h2>
              <div className="py-2 ">
                {categories.map((c, i) => (
                  <div
                    className="flex justify-start items-center gap-2 py-1"
                    key={i}
                  >
                    <input type="checkbox" id={c} />
                    <label
                      className="text-slate-600 block cursor-pointer"
                      htmlFor={c}
                    >
                      {c}
                    </label>
                  </div>
                ))}
              </div>
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                  Price
                </h2>
                {/* <Range step={5} min={10} max={2000}
                values={} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shops;
