const initState = {
    licensePlate: {
        alphabet: '',
        number: '',
        province: ''
    }
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
        default:
            return state;
    }
}

export default carInformationReducer;