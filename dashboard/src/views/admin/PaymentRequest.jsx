import React, { forwardRef, useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import toast from "react-hot-toast";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import {
  confirm_payment_request,
  get_payment_request,
  messageClear,
} from "../../store/Reducers/paymentReducer";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
  const dispatch = useDispatch();
  const { successMessage, errorMessage, loader, pendingWithdraws } =
    useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(get_payment_request());
  }, []);

  const [paymentId, setPaymentId] = useState("");

  const confirm_request = (id) => {
    setPaymentId(id);
    dispatch(confirm_payment_request(id));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          Tk {pendingWithdraws[index]?.amount}
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-[#3c4a47] text-[#ffffff] rounded-md text-xs">
            {pendingWithdraws[index]?.status}
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          {moment(pendingWithdraws[index]?.createdAt).format("LL")}
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button
            disabled={loader}
            onClick={() => confirm_request(pendingWithdraws[index]?._id)}
            className="bg-[#dbdfaa] shadow-lg hover:shadow-[#dbdfaa]/50 px-3 py-[2px] cursor-pointer text-green-950 rounded-md text-sm"
          >
            {loader && paymentId === pendingWithdraws[index]?._id
              ? "loading..."
              : "Confirm"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5 text-[#ededed]">
      <div className="w-full p-4 bg-[#4e5447] rounded-md">
        <h2 className="text-xl font-medium pb-5 ">Withdrawal Request</h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#363a31] uppercase text-xs min-w-[340px] border-b border-dashed border-[#6d6c6c]">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
            </div>
            {
              <List
                style={{ minWidth: "340px", overflowX: "hidden" }}
                className="List"
                height={350}
                itemCount={pendingWithdraws.length}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
