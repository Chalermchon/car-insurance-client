import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Responsive, Message, TransitionablePortal, Button, Grid, Icon, Transition, Divider } from 'semantic-ui-react'

import provincesOption from "../util/provinces";
import { setAddressCustomer } from '../../redux/action';

export default (props) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true);

    const [houseNumber, setHouseNumber] = useState('');
    const [tambon, setTambon] = useState('');
    const [road, setRoad] = useState('');
    const [changwat, setChangwat] = useState('');
    const [amphoe, setAmphoe] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [haveError, setHaveError] = useState(false)

    const dispatch = useDispatch();

    const handleNextButton = () => {
        if (houseNumber !== '' && tambon !== '' &&
            road !== '' && changwat !== '' &&
            amphoe !== '' && postalCode !== '') {
            dispatch(setAddressCustomer({
                houseNumber: houseNumber,
                tambon: tambon,
                road: road,
                changwat: changwat,
                amphoe: amphoe,
                postalCode: postalCode
            }));
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
                        name='houseNumber'
                        onChange={(e, { value }) => setHouseNumber(value)}
                        label='บ้านเลขที่'
                        width='4'
                        fluid
                    />
                    <Form.Input
                        name='tambon'
                        onChange={(e, { value }) => setTambon(value)}
                        label='แขวง / ตำบล'
                        width='6'
                        fluid
                    />
                    <Form.Input
                        name='road'
                        onChange={(e, { value }) => setRoad(value)}
                        label='ถนน'
                        width='6'
                        fluid
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        value={changwat}
                        onChange={(e, { value }) => setChangwat(value)}
                        options={provincesOption}
                        label='จังหวัด'
                        width='6'
                        fluid
                    />
                    <Form.Input
                        name='amphoe'
                        onChange={(e, { value }) => setAmphoe(value)}
                        label='อำเภอ'
                        width='5'
                        fluid
                    />
                    <Form.Input
                        name='postalCode'
                        onChange={(e, { value }) => setPostalCode(value)}
                        label='รหัสไปรษณีย์'
                        width='5'
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
