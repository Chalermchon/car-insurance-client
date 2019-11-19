export const setCarLicensePlate = (carLicensePlate) => {
    return {
        type: 'SET_CAR_LICENSE_PLATE',
        payload: carLicensePlate
    };
}

export const setCarSery = (carSery) => {
    return {
        type: 'SET_CAR_SERY',
        payload: carSery
    };
}

export const setInsuranceGroup = (insuranceGroup) => {
    return {
        type: 'SET_INSURANCE_GROUP',
        payload: insuranceGroup
    };
}

export const setInsuranceTypeId = (insuranceTypeId) => {
    return {
        type: 'SET_INSURANCE_TYPE_ID',
        payload: insuranceTypeId
    };
}

export const setInsuranceTypeName = (insuranceTypeName) => {
    return {
        type: 'SET_INSURANCE_TYPE_NAME',
        payload: insuranceTypeName
    };
}

export const setStartProtectionAt = (startProtectionAt) => {
    return {
        type: 'SET_START_PROTECTION_AT',
        payload: startProtectionAt
    };
}