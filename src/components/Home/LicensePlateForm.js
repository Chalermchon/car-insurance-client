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
    const [haveServerError, setHaveServerError] = useState(false);

    const [resData, setResData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('loading', loading);
        console.log('resData', resData);

        if (!resData) {
            setHaveServerError(true)
        }
        else if (Object.keys(resData).length) {
            if (Object.keys(resData.data).length) {
                dispatch(setOldCustomer(resData.data));
                console.log(resData.data);
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
            if (alphabet.length == 1 || alphabet.length > 3) setHaveError(true)
            else if (number.length !== 4) setHaveError(true)
            else {
                let count = 0
                const str = "กขฃคฅฆงจฉชฌซศษสฎดฏตฐฑฒถทธณนบปผพภฝฟมญยรลฬฤฦวอหฮ"
                if (alphabet.length == 2) {
                    if (!(str.includes(alphabet.charAt(0)))) { count++; setHaveError(true) }
                    if (!(str.includes(alphabet.charAt(1)))) { count++; setHaveError(true) }
                }
                if (alphabet.length == 3) {
                    if ((isNaN(alphabet.charAt(0)))) { count++; setHaveError(true) }
                    if (!(str.includes(alphabet.charAt(1)))) { count++; setHaveError(true) }
                    if (!(str.includes(alphabet.charAt(2)))) { count++; setHaveError(true) }
                }
                if (number.length == 4) {
                    for (let i = 0; i < number.length; i++) {
                        if (isNaN(number.charAt(i))) { count++; setHaveError(true) }
                    }
                }
                if (count == 0) {
                    count = 0
                    setLoading(true)
                    getOldCustomer(alphabet, number, province, setResData, setLoading)
                }
            }
        }
        else { setHaveError(true) }
    }
    return (
        <div className='lp'>
            <Card centered fluid link raised className='lp-computer-card'>
                <Card.Content>
                    <Form size="massive" unstackable >
                        <Form.Group >
                            <Form.Input fluid width="6"
                                placeholder='กด'
                                onChange={(e) => {
                                    dispatch(setCarLicensePlate({
                                        alphabet: e.target.value,
                                        number: number,
                                        province: province
                                    }));
                                }}
                                error={haveError}
                            />
                            <Form.Input fluid width="10"
                                placeholder='1234'
                                onChange={(e) => {
                                    dispatch(setCarLicensePlate({
                                        alphabet: alphabet,
                                        number: e.target.value,
                                        province: province
                                    }));
                                }}
                                error={haveError}
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
                            error={haveError}
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
                open={haveServerError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => { setHaveServerError(false) }}
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
