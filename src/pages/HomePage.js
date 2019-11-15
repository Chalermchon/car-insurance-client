import React from 'react'
import { Grid } from 'semantic-ui-react'

import './HomePage.css'

import Label from '../components/util/Label'
import LicensePlateForm from '../components/Home/LicensePlateForm'
import InsuranceTypeExploration from '../components/Home/InsuranceTypeExploration'

function HomePage() {
    return (
        <Grid padded centered>
            <Grid.Row>
                <Grid.Column width="10">
                    <Label text="กรอกป้ายทะเบียนรถของคุณ ที่นี่" align="center"/>
                    <LicensePlateForm/>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width="14">
                    <Label text="สำรวจกรมธรรม์แต่ละประเภท" align="center"/>
                    <InsuranceTypeExploration />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default HomePage
