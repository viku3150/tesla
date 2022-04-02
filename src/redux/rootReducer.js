import { combineReducers } from "redux";
import carReducer from "../redux/cars/carSlice";

const rootReducer = combineReducers({
  car: carReducer,
});

export default rootReducer;
