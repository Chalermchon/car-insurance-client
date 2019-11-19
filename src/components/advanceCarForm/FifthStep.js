import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Responsive, Message, TransitionablePortal, Button, Segment, Icon, Transition, Divider } from 'semantic-ui-react'
import { setCarIdentNumber } from '../../redux/action';

export default () => {

    const brand = useSelector(state => state.carInformation.brand);
    const model = useSelector(state => state.carInformation.model);
    const year = useSelector(state => state.carInformation.year);
    const detail = useSelector(state => state.carInformation.detail);
    const licensePlate = useSelector(state => state.carInformation.licensePlate);

    const dispatch = useDispatch();

    const [vinNumber, setVinNumber] = useState('');
    const [engNumber, setEngNumber] = useState('');

    const [haveError, setHaveError] = useState(false);

    const handleNextButton = () => {
        if (vinNumber !== '' && engNumber !== '') {
            dispatch(setCarIdentNumber({
                vinNumber: vinNumber,
                engNumber: engNumber
            }));
        } else {
            setHaveError(true);
        }
    }
    
    return (
        <div className="carInfoForm">
            <br/>
                <Divider horizontal>more car infomation</Divider>
            <br/>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>{brand}</Segment>
                <Segment textAlign='center' color='teal'>{model}</Segment>
                <Segment textAlign='center' color='teal'>{year}</Segment>
                <Segment textAlign='center' color='teal'>{detail}</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>{licensePlate.alphabet +' '+ licensePlate.number}</Segment>
                <Segment textAlign='center' color='teal'>{licensePlate.province}</Segment>
            </Segment.Group>
            <Form>
                <Form.Group>

                    <Form.Input
                        onChange={(e, { value }) => setVinNumber(value)}
                        value={vinNumber}
                        label='หมายเลขตัวถัง'
                        width='15'
                        fluid
                    />
                    <Form.Input
                        onChange={(e, { value }) => setEngNumber(value)}
                        value={engNumber}
                        label='หมายเลขเครื่อง'
                        width='15'
                        fluid
                    />
                </Form.Group>
            </Form>

            <Transition animation='scale' duration={500}>
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
