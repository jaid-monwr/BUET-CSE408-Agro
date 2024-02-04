import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cart_products = [1, 2];
  const outOfStockProduct = [1, 2];

  const redirect = () => {
    navigate("/shipping", {
      state: {
        products: [],
        price: 500,
        shipping_fee: 45,
        items: 4,
      },
    });
  };

  return (
    <div>
      <Header />
      <section className="bg-[url('http://localhost:3000/images/banner/1.gif')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full  mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Agro</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <MdOutlineKeyboardArrowRight />
                </span>
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#eeeeee]">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
          {cart_products.length > 0 || outOfStockProduct.length > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%] md-lg:w-full">
                <div className="pr-3 md-lg:pr-0 ">
                  <div className="flex flex-col gap-3 ">
                    <div className="bg-white p-4 ">
                      <h2 className="text-md text-green-400 font-semibold">
                        Stock Products
                        {cart_products.length - outOfStockProduct.length}
                      </h2>
                    </div>
                    {cart_products.map((p, i) => (
                      <div className="flex bg-white p-4 flex-col gap-2 ">
                        <div className="flex justify-start items-center">
                          <h2 className="text-md text-slate-600">
                            Sheikh Farid Onions
                          </h2>
                        </div>
                        {[1, 2].map((p, i) => (
                          <div className="w-full flex flex-wrap ">
                            <div className="flex sm:w-full gap-2 w-7/12">
                              <div className="flex gap-2 justify-start items-center">
                                <img
                                  className="w-[80px] h-[80px] "
                                  src={`http://localhost:3000/images/product/${
                                    i + 1
                                  }.png`}
                                  alt="product image"
                                />
                                <div className="pr-4 text-slate-600 ">
                                  <h2 className="text-md">Premium Rice</h2>
                                  <span className="text-sm">
                                    Brand : Rashid
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between w-5/12 sm:w-full sm:mt-3 ">
                              <div className="pl-4 sm:pl-0 ">
                                <h2 className="text-lg text-orange-500">
                                  Tk 655
                                </h2>
                                <p className="line-through">Tk 700</p>
                                <p>-10%</p>
                              </div>
                              <div className="flex gap-2 flex-col">
                                <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                  <div className="px-3 cursor-pointer">-</div>
                                  <div className="px-3 ">5</div>
                                  <div className="px-3 cursor-pointer">+</div>
                                </div>
                                <button className="px-5 py-[3px] bg-red-500 text-white">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    {outOfStockProduct.length > 0 && (
                      <div className="flex flex-col gap-3 ">
                        <div className="bg-white p-4 ">
                          <h2 className="text-md text-red-500 font-semibold">
                            Out of Stock Products
                            {outOfStockProduct.length}
                          </h2>
                        </div>
                        <div className="bg-white p-4 ">
                          {[1, 2].map((p, i) => (
                            <div className="w-full flex flex-wrap ">
                              <div className="flex sm:w-full gap-2 w-7/12">
                                <div className="flex gap-2 justify-start items-center">
                                  <img
                                    className="w-[80px] h-[80px] "
                                    src={`http://localhost:3000/images/product/${
                                      i + 1
                                    }.png`}
                                    alt="product image"
                                  />
                                  <div className="pr-4 text-slate-600 ">
                                    <h2 className="text-md">Premium Rice</h2>
                                    <span className="text-sm">
                                      Brand : Rashid
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between w-5/12 sm:w-full sm:mt-3 ">
                                <div className="pl-4 sm:pl-0 ">
                                  <h2 className="text-lg text-orange-500">
                                    Tk 655
                                  </h2>
                                  <p className="line-through">Tk 700</p>
                                  <p>-10%</p>
                                </div>
                                <div className="flex gap-2 flex-col">
                                  <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
                                    <div className="px-3 cursor-pointer">-</div>
                                    <div className="px-3 ">5</div>
                                    <div className="px-3 cursor-pointer">+</div>
                                  </div>
                                  <button className="px-5 py-[3px] bg-red-500 text-white">
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[33%] md-lg:w-full">
                <div className="pl-3 md-lg:pl-0 md-lg:mt-5 ">
                  {cart_products.length > 0 && (
                    <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
                      <h2 className="text-xl font-bold">Order Summary</h2>
                      <div className="flex justify-between items-center">
                        <span>4 Items</span>
                        <span>Tk 1000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Shipping Fee</span>
                        <span>Tk 1000</span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-500 rounded-sm"
                          type="text"
                          placeholder="Input Voucher Coupon"
                        />
                        <button className="px-5 py-[1px] bg-violet-700 text-white rounded-sm uppercase text-sm">
                          Apply
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total</span>
                        <span className="text-lg text-orange-500">Tk 2000</span>
                      </div>
                      <button
                        onClick={redirect}
                        className="px-5 py-[6px] rounded-sm hover:shadow-orange-500/20 hover:shadow-lg bg-orange-500 text-sm text-white uppercase"
                      >
                        Proceed to checkout 4
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link className="px-4 py-1 bg-violet-700 text-white" to="/shops">
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
