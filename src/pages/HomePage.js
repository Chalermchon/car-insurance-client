import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

import '../css/HomePage.css'

import Label from '../components/util/Label'
import LicensePlateForm from '../components/Home/LicensePlateForm'
import InsuranceTypeExploration from '../components/Home/InsuranceTypeExploration'

function HomePage() {
    const [data, setData] = useState({});


    useEffect(() => {
        console.log("adsf");

        fetch(`/api/insurance-types`)
            .then((res) => {
                console.log(res);
                
            })
    });

    return (
        <Grid padded centered>
            <Grid.Row>
                <Grid.Column width="10">
                    <Label text="กรอกป้ายทะเบียนรถของคุณ ที่นี่" align="center" />
                    <LicensePlateForm />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column width="14">
                    <Label text="สำรวจกรมธรรม์แต่ละประเภท" align="center" />
                    <InsuranceTypeExploration />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default HomePage
