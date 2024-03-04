import React, { useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import customer from "../../assets/seller.png";
import { get_seller_dashboard_index_data } from "../../store/Reducers/dashboardIndexReducer";
import moment from "moment";

const SellerDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const {
    totalSale,
    totalOrder,
    totalProduct,
    totalPendingOrder,
    recentOrders,
    recentMessage,
  } = useSelector((state) => state.dashboardIndex);

  const state = {
    series: [
      {
        name: "Orders",
        data: [44, 55, 41, 67, 22, 43, 21, 44, 45, 12, 67, 89],
      },
      {
        name: "Revenue",
        data: [34, 65, 51, 47, 52, 33, 51, 24, 35, 32, 47, 69],
      },
      {
        name: "Sales",
        data: [12, 45, 21, 67, 22, 43, 21, 44, 45, 12, 67, 89],
      },
    ],
    options: {
      color: ["#181ee8", "#181338"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#064420",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#064420",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_seller_dashboard_index_data());
  }, []);

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">Tk {totalSale}</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">{totalProduct}</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">{totalOrder}</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <AiOutlineShoppingCart className="text-green-950 shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#4e5447] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-3xl font-bold">{totalPendingOrder}</h2>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-white flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-green-950 shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-7 ">
        <div className="w-full lg:w-7/12 lg:pr-3 ">
          <div className="w-full bg-[#ededed] p-4 rounded-md border border-slate-100">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#ededed] p-4 rounded-md text-[#6d6c6c] border border-slate-100">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#3c3840] pb-3">
                Recent customer message
              </h2>
              <Link className="font-semibold text-sm text-[#3c3840]">
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-6 text-[#3c3840]">
              <ol className="relative border-1 border-slate-600 ml-4">
                {recentMessage.map((m, i) => (
                  <li className="mb-3 ml-6 ">
                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4e5447] rounded-full z-10">
                      {m.senderId === userInfo._id ? (
                        <img
                          className="rounded-full w-full h-full shadow-lg"
                          src={userInfo.image}
                          alt=""
                        />
                      ) : (
                        <img
                          className="rounded-full w-full h-full shadow-lg"
                          src={customer}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <Link className="text-md font-normal">
                          {m.senderName}
                        </Link>
                        <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                          {moment(m.createdAt).startOf("hour").fromNow()}
                        </time>
                      </div>
                      <div className="p-2 text-xs font-normal bg-white rounded-lg border border-slate-950/50">
                        {m.message}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-[#ededed] rounded-md mt-6 border border-slate-100">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-green-950 pb-3">
            Recent orders
          </h2>
          <Link
            to="/seller/dashboard/orders"
            className="font-semibold text-sm text-green-950"
          >
            View All
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-green-950">
            <thead className="text-sm text-green-950 uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    #{d._id}
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Tk {d.price}
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.payment_status}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>{d.delivery_status}</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link to={`/seller/dashboard/order/details/${d._id}`}>
                      view
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
