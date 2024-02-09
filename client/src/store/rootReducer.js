import homeReducer from "./reducers/homeReducer";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducers = {
  home: homeReducer,
  auth: authReducer,
  cart: cartReducer,
};

export default rootReducers;
