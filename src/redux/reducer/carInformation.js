const initState = {
    licensePlate: {
        alphabet: '',
        number: '',
        province: ''
    },
    carSeryId: 0,
    brand: '',
    model: '',
    year: '',
    detail: '',
    vinNumber: '',
    engNumber: '',
}

const carInformationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_CAR_LICENSE_PLATE':
            return {
                ...state,
                licensePlate: {
                    alphabet: action.payload.alphabet,
                    number: action.payload.number,
                    province: action.payload.province
                }
            };
        case 'SET_CAR_SERY':
            return {
                ...state,
                brand: action.payload.brand,
                model: action.payload.model,
                year: action.payload.year,
                detail: action.payload.detail
            };
        case 'SET_CAR_VIN_NUMBER':
            return {
                ...state,
                vinNumber: action.payload
            };
        case 'SET_CAR_ENG_NUMBER':
            return {
                ...state,
                engNumber: action.payload
            };
        case 'SET_CAR_SERY_ID':
            return {
                ...state,
                carSeryId: action.payload
            };
        case 'SET_OLD_CUSTOMER':
            return action.payload.carInformation;
        default:
            return state;
    }
}


export default carInformationReducer;