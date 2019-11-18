import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        console.log('carInfo', carInfo);
    }, [carInfo])

    const handleChange = ((e, {name, value})=>{
        setCarInfo({...carInfo,[name]: value})
    })

    return (
        <div>
            <div style={{backgroundColor: "#F4F6F6", margin: "80px", paddingTop: "20px"}}>
                <Grid padded centered>
                    <Grid.Row>
                        <Grid.Column width="14">
                            <Label text='ข้อมูลรถเบื้องต้นของคุณ' align='center'/>
                            <div style={{margin: "20px"}}></div>
                            <BasicCarInformationForm setShowCardStatus={() => setShowCardStatus(true)}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        
            <div style={{margin: "40px"}}></div>
            {/* <Grid.Row>
                <Grid.Column width="14">
                    <Label text='ข้อมูลส่วนตัวของคุณ' align='left'/>
                    <hr />
                    <PersonalInformationForm />
                </Grid.Column>
            </Grid.Row> */}
            <div style={{margin: "20px"}}>
                <Transition visible={showCardStatus} animation='scale' duration={500}>
                    <div className="showCard">
                        <CardOfInsurance/> 
                    </div>
                </Transition>
            </div>
        </div>
        
        
    )
}

export default CarRegisterPage
