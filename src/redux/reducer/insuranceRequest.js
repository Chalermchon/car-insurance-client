const initState = {
    insuranceTypeId: '',
    insuranceTypeName: '',
    startProtectionAt: '',
}

const insuranceRequestReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_INSURANCE_TYPE_ID':
            return {
                ...state,
                insuranceTypeId: action.payload
            };
        case 'SET_INSURANCE_TYPE_NAME':
            return {
                ...state,
                insuranceTypeName: action.payload
            };
        case 'SET_START_PROTECTION_AT':
            return {
                ...state,
                startProtectionAt: action.payload
            };
        default:
            return state;
    }
}

export default insuranceRequestReducer;