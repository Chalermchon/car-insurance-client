import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Card, Button, Icon, TransitionablePortal, Dimmer, Message, Loader } from 'semantic-ui-react'

import { setCarLicensePlate, setOldCustomer } from "../../redux/action";

import provincesOption from "../util/provinces"
import { getOldCustomer } from '../../axios/OldCustomer';

function LicensePlateForm() {

    const dispatch = useDispatch();
    const licensePlate = useSelector(state => state.carInformation.licensePlate);
    const history = useHistory();

    const alphabet = licensePlate.alphabet;
    const number = licensePlate.number;
    const province = licensePlate.province;

    const [haveError, setHaveError] = useState(false);

    const [resData, setResData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('loading', loading);
        console.log('resData', resData);

        if (!resData) {
            setHaveError(true)
        }
        else if (Object.keys(resData).length) {
            if (Object.keys(resData.data).length) {
                console.log(resData.data);
                dispatch(setOldCustomer(resData.data));
            }
            history.push('/car-information')
        }
        else if (!loading) {
            dispatch(setCarLicensePlate({
                alphabet: '',
                number: '',
                province: ''
            }));
        }
    }, [resData, loading])

    const nextToCarRegisterFormPage = (e) => {
        if (alphabet !== '' && number !== '' && province !== '') {
            setLoading(true)
            getOldCustomer(alphabet, number, province, setResData, setLoading)
        }
        else {
            setHaveError(true)
        }
    }

    return (
        <div className='lp'>
            <Card centered fluid link raised className='lp-computer-card'>
                <Card.Content>
                    <Form size="massive" unstackable >
                        <Form.Group >
                            <Form.Input fluid width="6"
                                name='alphabet' placeholder='กด'
                                onChange={(e) => {
                                    dispatch(setCarLicensePlate({
                                        alphabet: e.target.value,
                                        number: number,
                                        province: province
                                    }));
                                }}
                                error={haveError && !alphabet}
                            />
                            <Form.Input fluid width="10"
                                name='number' placeholder='1234'
                                onChange={(e) => {
                                    dispatch(setCarLicensePlate({
                                        alphabet: alphabet,
                                        number: e.target.value,
                                        province: province
                                    }));
                                }}
                                error={haveError && !number}
                            />
                        </Form.Group>
                        <Form.Select fluid
                            name='province' placeholder='กรุงเทพมหานคร'
                            options={provincesOption}
                            onChange={(e, v) => {
                                dispatch(setCarLicensePlate({
                                    alphabet: alphabet,
                                    number: number,
                                    province: v.value
                                }));
                            }}
                            error={haveError && !province}
                        />
                    </Form>
                </Card.Content>
                <Card.Content extra textAlign="right" className='lp-computer-card-footer' >
                    <Button animated color='teal' onClick={nextToCarRegisterFormPage} role="submit">
                        <Button.Content visible>ถัดไป</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Card.Content>
            </Card>

            <TransitionablePortal
                open={haveError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => { setHaveError(false) }}
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
                        "เกิดข้อผิดพลาดบางอย่าง โปรดลองใหม่อีกครั้ง"
                    </Message.Header>
                </Message>
            </TransitionablePortal>
            <Dimmer active={loading} inverted page>
                <Loader>Loading</Loader>
            </Dimmer>
        </div>
    )
}

export default LicensePlateForm
