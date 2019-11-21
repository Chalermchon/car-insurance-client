import axios from "./index";

export default (customerInformation, carInformation, insuranceRequest, setResponse) => {
    let formData = new FormData();

    formData.set("first_name", customerInformation.firstName);
    formData.set("last_name", customerInformation.lastName);
    formData.set("email", customerInformation.email);
    formData.set("phone", customerInformation.phone);
    formData.set("career", customerInformation.career);
    formData.set("house_number", customerInformation.houseNumber);
    formData.set("tambon", customerInformation.tambon);
    formData.set("changwat", customerInformation.changwat);
    formData.set("amphoe", customerInformation.amphoe);
    formData.set("postal_code", customerInformation.postalCode);

    axios.put(`/api/customers/${customerInformation.customerId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {

        let formData = new FormData();

        formData.set("car_information_id", carInformation.carInformationId);
        formData.set("customer_id", customerInformation.customerId);
        formData.set("seller_id", 1);
        formData.set("insurance_type_id", insuranceRequest.insuranceTypeId);
        formData.set("start_protection_at", insuranceRequest.startProtectionAt);

        axios.post('/api/insurance-requests', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {

            setResponse({ success: true, data: res.data.data });


        }).catch((err) => {

            let resErr = err.response;
            if (resErr.status === 400) {
                if (resErr.data) {
                    setResponse({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
                }
            } else {
                setResponse({ success: false, message: 'การอัพโหลดเกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง' });
            }
        })
    }).catch((err) => {

        let resErr = err.response;
        if (resErr.status === 400) {
            if (resErr.data) {
                setResponse({ success: false, message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
            }
        } else {
            setResponse({ success: false, message: 'การอัพโหลดเกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง' });
        }
    })
}
