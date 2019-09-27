import React from 'react'
import { Grid } from 'semantic-ui-react'

import Label from '../components/Label'
import LicensePlateForm from '../components/LicensePlateForm'
import InsuranceTypeExploration from '../components/InsuranceTypeExploration'

function Home() {
    return (
        <Grid padded centered>
            <Label text="กรอกป้ายทะเบียนรถของคุณที่นี่"/> 
            <LicensePlateForm/>

            <Label text="สำรวจกรมธรรม์แต่ละประเภท"/>
            <InsuranceTypeExploration/>
        </Grid>
    )
}

export default Home
