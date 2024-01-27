import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import Search from "../components/Search";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full p-4 bg-[#ededed] rounded-md border border-slate-100">
        <Search
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
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
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    #12345678
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Tk 1200
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>pending</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span>pending</span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link
                      to={`/seller/dashboard/order/details/123`}
                      className="w-[30px] flex justify-center items-center text-white p-[6px] bg-[#4e5447] rounded-sm hover:shadow-lg hover:shadow-green-950/50"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={3}
            perPage={perPage}
            showItem={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
