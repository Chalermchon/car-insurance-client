import axios from "./index";

export const getRatePricesAndCarSeryId = (setRatePrices, insuranceGroup, setCarSeryId, brand, model, year, detail) => {
    axios.get(`/api/rate-prices/${brand}/${model}/${year}/${detail}`).then(res => {
        let ratePrices = res.data.data.filter(value => {
            return value.group === insuranceGroup;
        })
        console.log(ratePrices);
        
        setRatePrices(ratePrices)
        setCarSeryId(res.data.carSeryId)
    });
}