import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Dimmer, Loader, Message, TransitionablePortal, Button, Segment, Icon, Transition, Divider } from 'semantic-ui-react'
import { setCarIdentNumber, setCarVinNumber, setCarEngNumber } from '../../redux/action';
import postDataToServer from '../../axios/postDataToServer';

export default () => {

    const customerInformation = useSelector(state => state.customerInformation);
    const carInformation = useSelector(state => state.carInformation);
    const insuranceRequest = useSelector(state => state.insuranceRequest);
    const oldCustomer = useSelector(state => state.oldCustomer);

    const brand = carInformation.brand;
    const model = carInformation.model;
    const year = carInformation.year;
    const detail = carInformation.detail;
    const licensePlate = carInformation.licensePlate;

    const dispatch = useDispatch();

    const vinNumber = carInformation.vinNumber
    const engNumber = carInformation.engNumber

    const history = useHistory()

    const [response, setResponse] = useState({})

    const [loading, setLoading] = useState(false);
    const [haveError, setHaveError] = useState(false);
    const [done, setDone] = useState(false);
    const timeout = useRef(false)

    const handleNextButton = () => {
        if (vinNumber !== '' && engNumber !== '') {
            setLoading(true)
            postDataToServer(customerInformation, carInformation, insuranceRequest, setResponse)
        } else {
            setHaveError(true);
        }
    }

    useEffect(() => {

        if (Object.keys(response).length && loading) {
            if (response.success) {
                timeout.current = setInterval(() => {
                    setDone(true)
                    setLoading(false)
                    console.log(response);
                }, 500);
            } else {
                timeout.current = setInterval(() => {
                    setHaveError(true)
                    setLoading(false)
                    console.log(response.message);
                }, 500);
            }
        }
        return () => {
            clearInterval(timeout.current)
        }
    }, [response, loading])

    return (
        <div className="carInfoForm">
            <br />
            <Divider horizontal>more car infomation</Divider>
            <br />
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>{brand}</Segment>
                <Segment textAlign='center' color='teal'>{model}</Segment>
                <Segment textAlign='center' color='teal'>{year}</Segment>
                <Segment textAlign='center' color='teal'>{detail}</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>{licensePlate.alphabet + ' ' + licensePlate.number}</Segment>
                <Segment textAlign='center' color='teal'>{licensePlate.province}</Segment>
            </Segment.Group>
            <Form>
                <Form.Group>

                    <Form.Input
                        readOnly={oldCustomer}
                        onChange={(e, { value }) => dispatch(setCarVinNumber(value))}
                        value={vinNumber}
                        label='หมายเลขตัวถัง'
                        width='15'
                        fluid
                    />
                    <Form.Input
                        readOnly={oldCustomer}
                        onChange={(e, { value }) => dispatch(setCarEngNumber(value))}
                        value={engNumber}
                        label='หมายเลขเครื่อง'
                        width='15'
                        fluid
                    />
                </Form.Group>
            </Form>

            <Transition animation='scale' duration={500}>
                <Button animated color='green' floated='right' onClick={() => { handleNextButton() }}>
                    <Button.Content visible>ยืนยัน</Button.Content>
                    <Button.Content hidden>
                        <Icon name='save' />
                    </Button.Content>
                </Button>
            </Transition>
            <TransitionablePortal
                open={haveError || done}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => {
                    if (haveError) {
                        setHaveError(false)
                        setResponse({})
                    }else{
                        history.push('/')
                    }
                }}
            >
                <Message
                    error={haveError}
                    success={done}
                    header
                    size='large'
                    style={{
                        left: '30vw', right: '30vw', position: 'fixed', top: '15vh',
                        textAlign: 'center', boxShadow: '0px 5px 10px #b3b3b3'
                    }}
                >
                    <Message.Header>
                        <Icon name={haveError ? 'warning' : 'check circle'} />
                        {haveError ? (!Object.keys(response).length ? 'กรุณากรอกข้อมูลให้ครบถ้วน' : response.message) : 'บันทึกข้อมูลเรียบร้อย'}
                    </Message.Header>
                    {haveError ? "" : 'รอรับการตอบกลับจากผู้ขาย หรือศูนย์ประกัน'}
                </Message>
            </TransitionablePortal>
            <Dimmer active={loading} inverted page>
                <Loader>Loading</Loader>
            </Dimmer>
        </div>
    )
}
