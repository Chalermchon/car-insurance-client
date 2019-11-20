import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Responsive, Message, TransitionablePortal, Button, Grid, Icon, Transition, Divider } from 'semantic-ui-react'

import provincesOption from "../util/provinces";
import { setAddressCustomer } from '../../redux/action';

export default (props) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true);

    const customerInformation = useSelector(state => state.customerInformation)
    const oldCustomer = useSelector(state => state.oldCustomer)

    const houseNumber = customerInformation.houseNumber
    const tambon = customerInformation.tambon
    const changwat = customerInformation.changwat
    const amphoe = customerInformation.amphoe
    const postalCode = customerInformation.postalCode

    const [haveError, setHaveError] = useState(false)

    const dispatch = useDispatch();

    const handleNextButton = () => {
        if (houseNumber !== '' && tambon !== '' && amphoe !== '' &&
            changwat !== '' && postalCode !== '') {
            
            props.setIsShowStepFive()
            setIsHindNextButton(false)
        } else {
            setHaveError(true)
        }
        //TODO: Test
        // props.setIsShowStepFive()
        // setIsHindNextButton(false)
    }

    return (
        <div className="carInfoForm">
            <br />
            <Divider horizontal>address</Divider>
            <br />
            <Form>
                <Form.Group>
                    <Form.Input
                        value={houseNumber}
                        name='houseNumber'
                        onChange={(e, { value }) => dispatch(setAddressCustomer({
                            houseNumber: value,
                            tambon,
                            changwat,
                            amphoe,
                            postalCode
                        }))}
                        label='บ้านเลขที่'
                        width='4'
                        fluid
                    />
                    <Form.Input
                        value={tambon}
                        name='tambon'
                        onChange={(e, { value }) => dispatch(setAddressCustomer({
                            houseNumber,
                            tambon: value,
                            changwat,
                            amphoe,
                            postalCode
                        }))}
                        label='แขวง / ตำบล'
                        width='6'
                        fluid
                    />
                    <Form.Input
                        value={amphoe}
                        name='amphoe'
                        onChange={(e, { value }) => dispatch(setAddressCustomer({
                            houseNumber,
                            tambon,
                            changwat,
                            amphoe: value,
                            postalCode
                        }))}
                        label='เขต / อำเภอ'
                        width='6'
                        fluid
                    />
                </Form.Group>
                <Form.Group style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'center'
                }}>
                    <Form.Select
                        value={changwat}
                        onChange={(e, { value }) => dispatch(setAddressCustomer({
                            houseNumber,
                            tambon,
                            changwat: value,
                            amphoe,
                            postalCode
                        }))}
                        options={provincesOption}
                        label='จังหวัด'
                        width='7'
                        fluid
                    />
                    <Form.Input
                        value={postalCode}
                        name='postalCode'
                        onChange={(e, { value }) => dispatch(setAddressCustomer({
                            houseNumber,
                            tambon,
                            changwat,
                            amphoe,
                            postalCode: value
                        }))}
                        label='รหัสไปรษณีย์'
                        width='4'
                        fluid
                    />
                </Form.Group>
            </Form>
            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right' onClick={() => { handleNextButton() }}>
                    <Button.Content visible>ถัดไป</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Transition>
            <TransitionablePortal
                open={haveError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => setHaveError(false)}
            >
                <Message
                    error
                    header
                    size='large'
                    style={{
                        left: '30vw', right: '30vw', position: 'fixed', top: '15vh',
                        textAlign: 'center', boxShadow: '0px 5px 10px #b3b3b3'
                    }}
                >
                    <Message.Header>
                        <Icon name='warning' />
                        กรุณากรอกข้อมูลให้ครบถ้วน
                    </Message.Header>

                </Message>
            </TransitionablePortal>
        </div>
    )
}
