import axios from "./index";

const getData = (path, setMethod) => {
    axios.get(path).then(res => {
        if (res.status === 200) {
            const arr = res.data.data.map((value, index) => {
                return {
                    key: `${index}`,
                    text: `${value}`,
                    value: `${value.replace(/ /g, '-')}`
                };
            });
            setMethod(arr);
        }
    })
}

export const  getBrands = (setBrands) => {return getData('/api/car-series/brands', setBrands)}
export const getModels = (setModels, brand) => {return getData(`/api/car-series/models/${brand}`, setModels)}
export const getYears = (setYear, model) => {return getData(`/api/car-series/years/${model}`, setYear)}
export const getDetails = (setDetails, {model, year}) => {return getData(`/api/car-series/details/${model}/${year}`, setDetails)}