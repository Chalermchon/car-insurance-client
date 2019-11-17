import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from "axios";
import { Grid, Transition } from 'semantic-ui-react'

import '../css/CarRegisterPage.css'

import Label from '../components/util/Label'
import BasicCarInformationForm from '../components/CarRegister/BasicCarInformationForm'
// import PersonalInformationForm from '../components/CarRegister/PersonalInformationForm'
import CardOfInsurance from '../components/CarRegister/CardOfInsurance'

function CarRegisterPage() {
    const [showCardStatus, setShowCardStatus] = useState(false);
    const [carInfo, setCarInfo] = useState({
        brand: '',
        model: '',
        detailModel: '',
        yearOfMNF: '',
        vinNumber: '',
        engNumber: ''
    })
    const [personalInfo, setPersonalInfo] = useState({
        namePrefix: '',
        firstName: '',
        lastName: '',
        identNumber: '',
        birthDate: '',
        identImg: '',
        email: '',
        phone: '',
        career: '',
        houseNumber: '',
        tambon: '',
        road: '',
        changwat: '',
        amphoe: '',
        postalCode: ''
    })
    const carInformation = useSelector(state => state.carInformation)

    useEffect(() => {
        axios.get(`http://192.168.1.177:3333/api/car-series/brands`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => {
                console.log(res.data);
            })
        console.log('carInformation', carInformation);

        console.log('carInfo', carInfo);
    }, [carInfo])

    const handleChange = ((e, { name, value }) => {
        setCarInfo({ ...carInfo, [name]: value })
    })

    return (
        <div>
            <div style={{ backgroundColor: "#F4F6F6", margin: "80px", paddingTop: "20px" }}>
                <Grid padded centered>
                    {/* <div> */}
                    <Grid.Row>
                        <Grid.Column width="14">
                            <Label text='ข้อมูลรถเบื้องต้นของคุณ' align='center' />
                            <div style={{ margin: "20px" }}></div>
                            <BasicCarInformationForm setShowCardStatus={() => setShowCardStatus(true)} />
                        </Grid.Column>
                    </Grid.Row>
                    {/* </div> */}
                </Grid>
            </div>

            <div style={{ margin: "40px" }}></div>
            {/* <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลรถของคุณ' align='left' />
                    <hr />
                    <BasicCarInformationForm handleChange={handleChange} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลส่วนตัวของคุณ' align='left' />
                    <hr />
                    <PersonalInformationForm />
                </Grid.Column>
            </Grid.Row> */}
            <div style={{ margin: "20px" }}>
                <Transition visible={showCardStatus} animation='scale' duration={500}>
                    <div className="showCard">
                        <CardOfInsurance />
                    </div>
                </Transition>
            </div>
        </div>


    )
}

export default CarRegisterPage
