import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Icon, Transition, Segment, Form, TransitionablePortal, Message } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import { setStartProtectionAt } from '../../redux/action';

export default ({ handleNextToStepTwo }) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true)
    const [haveError, setHaveError] = useState(false)

    const brand = useSelector(state => state.carInformation.brand)
    const model = useSelector(state => state.carInformation.model)
    const year = useSelector(state => state.carInformation.year)
    const detail = useSelector(state => state.carInformation.detail)
    const insuranceTypeName = useSelector(state => state.insuranceRequest.insuranceTypeName)
    const startProtectionAt = useSelector(state => state.insuranceRequest.startProtectionAt)

    const dispatch = useDispatch();

    const handleNextButton = () => {
        if (startProtectionAt) {
            handleNextToStepTwo(true)
            setIsHindNextButton(false) 
        }else{
            setHaveError(true)
        }
        //TODO: Test
        // handleNextToStepTwo(true)
        // setIsHindNextButton(false) 
    }

    return (
        <div className="carInfoForm">
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>{brand}</Segment>
                <Segment textAlign='center' color='teal'>{model}</Segment>
                <Segment textAlign='center' color='teal'>{year}</Segment>
                <Segment textAlign='center' color='teal'>{detail}</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>{insuranceTypeName}</Segment>
            </Segment.Group>

            <Form className='cr-form-comp' size='large'>
                <Form.Group inline>
                    <Form.Field width='3'>
                        <label >วันที่เริ่มคุ้มครอง</label>
                    </Form.Field>
                    <Form.Field width='14'>
                        <DateInput
                            value={startProtectionAt}
                            onChange={(e,v) => dispatch(setStartProtectionAt(v.value))}
                            iconPosition="right"
                            hideMobileKeyboard
                            closable
                            animation='none'
                            popupPosition='bottom center'
                            pickerWidth='50vw'
                            width='16'
                            textAlign='center'
                            dateFormat='YYYY-MM-DD'
                            minDate={((new Date()).getFullYear()) + '-' + ((new Date()).getMonth() + 1) + '-' + ((new Date()).getDate() + 1)}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>

            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right' onClick={() => {handleNextButton()}}>
                    <Button.Content visible>ถัดไป</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Transition>
            <TransitionablePortal
                open={haveError}
                transition={{ animation:'fly down', duration: 400}}
                onClose={() => setHaveError(false)}
            >
                <Message
                    error
                    header
                    size='large'
                    style={{ left: '30vw', right:'30vw', position: 'fixed', top: '15vh',
                        textAlign: 'center', boxShadow: '0px 5px 10px #b3b3b3'}}
                >
                    <Icon name='warning' />
                    กรุณาเลือกวันที่ต้องการเริ่มคุ้มครอง
                </Message>
            </TransitionablePortal>
        </div>
    )
}
