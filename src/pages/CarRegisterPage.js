import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'

import './CarRegisterPage.css'

import Label from '../components/Label'
import BasicCarInformationForm from '../components/CarRegister/BasicCarInformationForm'
import PersonalInformationForm from '../components/CarRegister/PersonalInformationForm'

function CarRegisterPage() {
    const [carInfo, setCarInfo] = useState({
        brand: '',
        model: '',
        detailModel: '',
        yearOfMNF: '',
        vinNumber: '',
        engNumber: ''
    })

    useEffect(() => {
        console.log('carInfo', carInfo);
    }, [carInfo])

    const handleChange = ((e, {name, value})=>{
        setCarInfo({...carInfo,[name]: value})
    })

    return (
        <Grid padded centered>
            <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลรถของคุณ' align='left'/>
                    <hr />
                    <BasicCarInformationForm handleChange={handleChange}/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลส่วนตัวของคุณ' align='left'/>
                    <hr />
                    <PersonalInformationForm />
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}

export default CarRegisterPage
