import axios from "./index";

export default (customerInformation, carInformation, insuranceRequest, setResponse) => {
    let formData = new FormData();

    formData.set("name_prefix", customerInformation.namePrefix);
    formData.set("first_name", customerInformation.firstName);
    formData.set("last_name", customerInformation.lastName);
    formData.set("ident_number", customerInformation.identNumber);
    formData.set("birth_date", customerInformation.birthDate);
    formData.set("email", customerInformation.email);
    formData.set("phone", customerInformation.phone);
    formData.append("ident_img", customerInformation.identImg);
    formData.set("career", customerInformation.career);
    formData.set("house_number", customerInformation.houseNumber);
    formData.set("tambon", customerInformation.tambon);
    formData.set("changwat", customerInformation.changwat);
    formData.set("amphoe", customerInformation.amphoe);
    formData.set("postal_code", customerInformation.postalCode);

    axios.post('/api/customers', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {

        let formData = new FormData();

        formData.set("license_plate_letter", carInformation.licensePlate.alphabet);
        formData.set("license_plate_number", carInformation.licensePlate.number);
        formData.set("license_plate_province", carInformation.licensePlate.province);
        formData.set("vin_number", carInformation.vinNumber);
        formData.set("eng_number", carInformation.engNumber);
        formData.set("car_sery_id", carInformation.carSeryId);
        formData.set("customer_id", res.data.data.id);

        axios.post('/api/car-informations', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {

            let formData = new FormData();

            formData.set("car_information_id", res.data.data.id);
            formData.set("customer_id", res.data.data.customer_id);
            formData.set("seller_id", 1);
            formData.set("insurance_type_id", insuranceRequest.insuranceTypeId);
            formData.set("start_protection_at", insuranceRequest.startProtectionAt);

            axios.post('/api/insurance-requests', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(res => {

                setResponse({ success: true, data: res.data.data });

            }).catch((err) => {
                axios.delete(`/api/car-informations/${res.data.data.id}`).then(res => {
                    console.log(res.data);
                    axios.delete(`/api/customers/${res.data.data.customer_id}`).then(res => {
                        console.log(res.data);
                    })
                })

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
            axios.delete(`/api/customers/${res.data.data.id}`).then(res => {
                console.log(res.data);
            })

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