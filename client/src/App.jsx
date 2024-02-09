import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shipping from "./pages/Shipping";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { get_category } from "./store/reducers/homeReducer";
import CategoryShops from "./pages/CategoryShops";
import SearchProduct from "./pages/SearchProduct";
import Payment from "./pages/Payment";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_category());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products?" element={<CategoryShops />} />
        <Route path="/products/search?" element={<SearchProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product/details/:slug" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
