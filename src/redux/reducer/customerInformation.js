const initState = {
    namePrefix: '',
    firstName: '',
    lastName: '',
    identNumber: '',
    birthDate: '',
    email: '',
    phone: '',
    identImg: null,
    career: '',
    houseNumber: '',
    tambon: '',
    changwat: '',
    amphoe: '',
    postalCode: '',
}

const customerInformationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER_INFORMATION':
            return {
                ...state,
                namePrefix: action.payload.namePrefix,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                identNumber: action.payload.identNumber,
                birthDate: action.payload.birthDate,
                email: action.payload.email,
                phone: action.payload.phone,
                identImg: action.payload.identImg,
            };
        case 'SET_CAREER_CUSTOMER':
            return {
                ...state,
                career: action.payload
            };
        case 'SET_ADDRESS_CUSTOMER':
            return {
                ...state,
                houseNumber: action.payload.houseNumber,
                tambon: action.payload.tambon,
                changwat: action.payload.changwat,
                amphoe: action.payload.amphoe,
                postalCode: action.payload.postalCode,
            };
        case 'SET_OLD_CUSTOMER':
            return action.payload.customerInformation;
        default:
            return state;
    }
}

export default customerInformationReducer;