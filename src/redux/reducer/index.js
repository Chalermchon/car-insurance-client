import { combineReducers } from "redux";
import carInformationReducer from "./carInformation";
import insuranceRequestReducer from "./insuranceRequest";

const reducers = combineReducers({
    carInformation: carInformationReducer,
    insuranceGroup: (state = '', action) => {
        switch (action.type) {
            case 'SET_INSURANCE_GROUP':
                return action.payload
            default:
                return state;
        }
    },
    insuranceRequest: insuranceRequestReducer,
});

export default reducers;