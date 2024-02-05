import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Ratings from "../components/Ratings";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { AiFillHeart } from "react-icons/ai";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import Reviews from "../components/Reviews";
import ShopProducts from "../components/products/ShopProducts";

const Details = () => {
  const [image, setImage] = useState("");
  const [state, setState] = useState("reviews");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };

  const images = [1, 2, 3, 4, 5, 6];
  const discount = 5;
  const stock = 5;

  return (
    <div>
      <Header />
      <div className="bg-[url('http://localhost:3000/images/banner/1.gif')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Agro</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 py-5 mb-5 ">
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto">
          <div className="flex justify-start items-center text-md text-slate-600 w-full">
            <Link to="/">Home</Link>
            <span className="pt-1">
              <MdOutlineKeyboardArrowRight />
            </span>
            <Link to="/">Onions</Link>
            <span className="pt-1">
              <MdOutlineKeyboardArrowRight />
            </span>
            <span>Onions</span>
          </div>
        </div>
      </div>
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto pb-16">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8">
            <div>
              <div className="p-5 border">
                <img
                  className="h-[500px] w-full "
                  src={
                    image
                      ? `http://localhost:3000/images/product/${image}.png`
                      : `http://localhost:3000/images/product/${images[1]}.png`
                  }
                  alt=""
                />
              </div>
              <div className="py-3">
                {images && (
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    transitionDuration={500}
                    responsive={responsive}
                  >
                    {images.map((img, i) => {
                      return (
                        <div onClick={() => setImage(img)}>
                          <img
                            src={`http://localhost:3000/images/product/${img}.png`}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-3xl text-slate-600 font-bold">
                <h2>Onions</h2>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex text-xl">
                  <Ratings ratings={4.5} />
                </div>
                <span className="text-green-500">(23 reviews)</span>
              </div>
              <div className="text-2xl text-red-500 font-bold flex gap-3">
                {discount ? (
                  <>
                    <h2 className="line-through">Tk 500</h2>
                    <h2>
                      Tk {500 - Math.floor((500 * discount) / 100)}(-{discount}
                      %)
                    </h2>
                  </>
                ) : (
                  <h2>Price : Tk 500</h2>
                )}
              </div>
              <div className="text-slate-600">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                  quasi laborum, ab ratione modi pariatur ipsam accusamus
                  deserunt labore maiores laboriosam suscipit nihil nostrum
                  fugiat animi vel doloribus odio dignissimos!
                </p>
              </div>
              <div className="flex gap-3 pb-10 border-b">
                {stock ? (
                  <>
                    <div className="flex bg-slate-200 h-[50px] justify-center items-center text-xl">
                      <div className="px-6 cursor-pointer ">-</div>
                      <div className="px-5">5</div>
                      <div className="px-6 cursor-pointer ">+</div>
                    </div>
                    <div>
                      <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-purple-500/40 bg-violet-700 text-white">
                        Add to Cart
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div>
                  <div className="h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white">
                    <AiFillHeart />
                  </div>
                </div>
              </div>
              <div className="flex py-5 gap-5">
                <div className="w-[150px] text-black font-bold text-xl flex flex-col gap-5">
                  <span>Availablity</span>
                  <span>Share on</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span className={`text-${stock ? "green" : "red"}-500`}>
                    {stock ? `In Stock (${stock})` : "Out of Stock"}
                  </span>
                  <ul className="flex justify-start items-center gap-3">
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-violet-700 text-white rounded-full"
                        href="#"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-violet-700 text-white rounded-full"
                        href="#"
                      >
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-violet-700 text-white rounded-full"
                        href="#"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-violet-700 text-white rounded-full"
                        href="#"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  {stock ? (
                    <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-orange-500/40 bg-orange-500 text-white">
                      Buy Now
                    </button>
                  ) : (
                    ""
                  )}
                  <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-lime-500/40 bg-lime-500 text-white">
                    Chat with Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto pb-16">
          <div className="flex flex-wrap ">
            <div className="w-[72%] md-lg:w-full">
              <div className="pr-4 md-lg:pr-0">
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => setState("reviews")}
                    className={`py-1 px-5 hover:text-white hover:bg-violet-700 ${
                      state === "reviews"
                        ? "bg-violet-700 text-white"
                        : "bg-slate-200 text-slate-700"
                    } rounded-sm`}
                  >
                    Reviews
                  </button>
                  <button
                    onClick={() => setState("description")}
                    className={`py-1 px-5 hover:text-white hover:bg-violet-700 ${
                      state === "description"
                        ? "bg-violet-700 text-white"
                        : "bg-slate-200 text-slate-700"
                    } rounded-sm`}
                  >
                    Description
                  </button>
                </div>
                <div>
                  {state === "reviews" ? (
                    <Reviews />
                  ) : (
                    <p className="py-5 text-slate-600">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut quasi laborum, ab ratione modi pariatur ipsam
                      accusamus deserunt labore maiores laboriosam suscipit
                      nihil nostrum fugiat animi vel doloribus odio dignissimos!
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[28%] md-lg:w-full">
              <div className="pl-4 md-lg:pl-0">
                <div className="px-3 py-2 text-slate-600 bg-slate-200">
                  <h2> From Farid Onions</h2>
                </div>
                <div className="flex flex-col gap-5 mt-3 border p-3">
                  {[1, 2, 3].map((p, i) => {
                    return (
                      <Link className="block">
                        <div className="relative h-[270px]">
                          <img
                            className="w-full h-full "
                            src={`http://localhost:3000/images/product/${p}.png`}
                            alt=""
                          />
                          <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                            5%
                          </div>
                        </div>
                        <h2 className="text-slate-600 py-1">Onions</h2>
                        <div className="flex items-center gap-2">
                          <Ratings ratings={4.5} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto">
          <h2 className="text-2xl py-8 text-slate-600">Related Products</h2>
          <div>
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                565: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={25}
              loop={true}
              pagination={{
                clickable: true,
                el: ".custom_bullet",
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p, i) => {
                return (
                  <SwiperSlide>
                    <Link className="block">
                      <div className="relative h-[270px]">
                        <div className="w-full h-full ">
                          <img
                            className="w-full h-full "
                            src={`http://localhost:3000/images/product/${p}.png`}
                            alt=""
                          />
                          <div className="absolute h-full w-full top-0 left-0 bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500"></div>
                        </div>

                        <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                          5%
                        </div>
                      </div>
                      <div className="p-4 flex flex-col gap-1">
                        <h2 className="text-slate-600 text-lg font-semibold">
                          Onions
                        </h2>
                        <div className="flex justify-start items-center gap-3">
                          <h2 className="text-[#6699ff] text-lg font-bold">
                            Tk 500
                          </h2>
                          <div className="flex">
                            <Ratings ratings={4.5} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-full flex justify-center items-center py-10">
            <div className="custom_bullet justify-center gap-3 !w-auto"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Details;