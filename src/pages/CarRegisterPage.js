import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Grid, Transition } from 'semantic-ui-react'

import '../css/CarRegisterPage.css'

import Label from '../components/util/Label'
import BasicCarInformationForm from '../components/CarRegister/BasicCarInformationForm'
// import PersonalInformationForm from '../components/CarRegister/PersonalInformationForm'
import CardsOfInsurance from '../components/CarRegister/CardsOfInsurance'

function CarRegisterPage() {
    const [showCardOfInsurance, setShowCardOfInsurance] = useState(false);
    const carInformation = useSelector(state => state.carInformation)

    const history = useHistory();

    useEffect(() => {
        if (
            carInformation.licensePlate.alphabet === '' ||
            carInformation.licensePlate.number === '' ||
            carInformation.licensePlate.province === ''
        ) {
            history.push('/')
        }
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: "#F4F6F6", margin: "80px", paddingTop: "20px" }}>
                <Grid padded centered>
                    <Grid.Row>
                        <Grid.Column width="14">
                            <Label text='ข้อมูลรถเบื้องต้นของคุณ' align='center' />
                            <BasicCarInformationForm setShowCardOfInsurance={setShowCardOfInsurance}
                                style={{ margin: "20px" }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <div style={{ margin: "20px" }}>
                <Transition visible={
                    carInformation.brand !== '' &&
                    carInformation.model !== '' &&
                    carInformation.year !== '' &&
                    carInformation.detail !== ''
                } animation='scale' duration={500}>
                    <div className="showCard">
                        <CardsOfInsurance />
                    </div>
                </Transition>
            </div>
        </div>


    )
}

export default CarRegisterPage
