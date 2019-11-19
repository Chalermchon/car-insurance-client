import React, { useEffect, useState } from 'react'

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Card, Button, Icon, TransitionablePortal, Message } from 'semantic-ui-react'

import { setCarLicensePlate } from "../../redux/action";

import provincesOption from "../util/provinces"

function LicensePlateForm() {
    const [alphabet, setAlphabet] = useState('');
    const [number, setNumber] = useState('');
    const [province, setProvince] = useState('');
    const [haveError, setHaveError] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const nextToCarRegisterFormPage = (e) => {
        if (alphabet !== '' && number !== '' && province !== '') {
            if (alphabet.length == 1 || alphabet.length > 3) setHaveError(true)
            else if (number.length !== 4) setHaveError(true)
            else {
                let count = 0
                if (alphabet.length == 2) {
                    if(!(isNaN(alphabet.charAt(0)))) {count++; setHaveError(true)}
                    if(!(isNaN(alphabet.charAt(1)))) {count++; setHaveError(true)}
                }
                if (alphabet.length == 3) {
                    console.log("goto 2");
                    if((isNaN(alphabet.charAt(0)))) {count++; setHaveError(true)}
                    if(!(isNaN(alphabet.charAt(1)))) {count++; setHaveError(true)}
                    if(!(isNaN(alphabet.charAt(2)))) {count++; setHaveError(true)}
                }
                if (number.length == 4) {
                    console.log("goto 3");
                    for (let i = 0; i < number.length; i++) {
                        console.log(number.charAt(i));
                        if(isNaN(number.charAt(i))){count++; setHaveError(true)}
                    }
                }
                if (count == 0) {
                    count = 0
                    dispatch(setCarLicensePlate({
                        alphabet: alphabet,
                        number: number,
                        province: province
                    }));
                    history.push("/car-information");
                }
            }
        }
        else {setHaveError(true)}
    }

    return (
        <div className='lp'>
            <Card centered fluid link raised className='lp-computer-card'>
                <Card.Content>
                    <Form size="massive" unstackable >
                        <Form.Group >
                            <Form.Input fluid width="6"
                                name='alphabet' placeholder='กด'
                                onChange={(e) => { setAlphabet(e.target.value); setHaveError(false) }}
                                error={haveError && !alphabet}
                            />
                            <Form.Input fluid width="10"
                                name='number' placeholder='1234'
                                onChange={(e) => { setNumber(e.target.value); setHaveError(false) }}
                                error={haveError && !number}
                            />
                        </Form.Group>
                        <Form.Select fluid
                            name='province' placeholder='กรุงเทพมหานคร'
                            options={provincesOption}
                            onChange={(e, v) => { setProvince(v.value); setHaveError(false) }}
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
                transition={{ animation: 'fly up', duration: 400 }}
                onClose={() => setHaveError(false)}
            >
                <Message
                    error
                    header
                    size='large'
                    style={{
                        left: '30vw', right: '30vw', position: 'fixed', top: '10vh',
                        textAlign: 'center', boxShadow: '0px 5px 10px #b3b3b3'
                    }}
                >
                    <Message.Header>
                        <Icon name='warning' />
                        กรุณาป้ายทะเบียนให้ครบถ้วน และ ถูกต้อง
                    </Message.Header>

                </Message>
            </TransitionablePortal>
        </div>
    )
}

export default LicensePlateForm
