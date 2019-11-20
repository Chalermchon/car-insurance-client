import { combineReducers } from "redux";
import carInformationReducer from "./carInformation";
import insuranceRequestReducer from "./insuranceRequest";
import customerInformationReducer from "./customerInformation";

const reducers = combineReducers({
    carInformation: carInformationReducer,
    customerInformation: customerInformationReducer,
    insuranceGroup: (state = '', action) => {
        switch (action.type) {
            case 'SET_INSURANCE_GROUP':
                return action.payload
            default:
                return state;
        }
    },
    oldCustomer: (state = false, action) => {
        switch (action.type) {
            case 'SET_OLD_CUSTOMER':
                return true
            default:
                return state;
        }
    },
    insuranceRequest: insuranceRequestReducer,
});

export default reducers;