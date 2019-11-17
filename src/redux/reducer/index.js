import { combineReducers } from "redux";
import carInformationReducer from "./carInformation";

const reducers = combineReducers({
    carInformation: carInformationReducer,
});

export default reducers;