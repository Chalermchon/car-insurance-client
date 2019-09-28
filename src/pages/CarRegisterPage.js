import React from 'react'
import { Grid } from 'semantic-ui-react'

import './CarRegisterPage.css'

import Label from '../components/Label'
import BasicCarInformationForm from '../components/CarRegister/BasicCarInformationForm'
import PersonalInformationForm from '../components/CarRegister/PersonalInformationForm'

function CarRegisterPage() {
    return (
        <Grid padded centered>
            <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลรถของคุณ' align='left'/>
                    <hr />
                    <BasicCarInformationForm/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลส่วนตัวของคุณ' align='left'/>
                    <hr />
                    <PersonalInformationForm/>
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}

export default CarRegisterPage
