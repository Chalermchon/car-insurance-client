import axios from "./index";

export const getOldCustomer = (alphabet, number, province, setResData, setLoading) => {
    axios.get(`/api/car-informations/${alphabet}/${number}/${province}`).then(res => {
        if (res.status === 200) {
            if (res.data.found) {
                setResData({data: res.data.data})
                setLoading(false)
            }
            else {
                setResData({data: {}})
                setLoading(false)
            }
        }
    }).catch(err => {
        setResData(null)
        setLoading(false)
    })
}