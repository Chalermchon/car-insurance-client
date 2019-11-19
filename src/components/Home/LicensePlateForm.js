import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Form, Card, Button, Icon } from 'semantic-ui-react'

import { setCarLicensePlate } from "../../redux/action";

import provincesOption from "../util/provinces"

function LicensePlateForm() {
    const [alphabet, setAlphabet] = useState('');
    const [number, setNumber] = useState('');
    const [province, setProvince] = useState('');
    const [haveError, setHaveError] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    const nextToCarRegisterFormPage = (e) => {
        if (alphabet !== '' && number !== '' && province !== '') {
            dispatch(setCarLicensePlate({
                alphabet: alphabet,
                number: number,
                province: province
            }));
            history.push("/car-information");
        }
        else{
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
                                onChange={(e) => {setAlphabet(e.target.value); setHaveError(false)}}
                                error={haveError && !alphabet}
                            />
                            <Form.Input fluid width="10" 
                                name='number' placeholder='1234'
                                onChange={(e) => {setNumber(e.target.value); setHaveError(false)}}
                                error={haveError && !number}
                            />
                        </Form.Group>
                        <Form.Select fluid
                            name='province' placeholder='กรุงเทพมหานคร'
                            options={provincesOption}
                            onChange={(e, v) => {setProvince(v.value); setHaveError(false)}}
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
        </div>
    )
}

export default LicensePlateForm
