import React, { useEffect } from 'react'
import { Form, Card, Button, Icon, Responsive } from 'semantic-ui-react'
import axios from 'axios'


function LicensePlateForm() {
    const nextToCarRegisterFormPage = (e) => {
        window.location = 'car-information'
    }
    const nextToTestPage = (e) => {
        window.location = 'test-page'
    }



    return (
        <div className='lp'>
            {/* <Responsive {...Responsive.onlyComputer}> */}
                <Card centered fluid link raised className='lp-computer-card'>
                    <Card.Content>
                        <Form size="massive" unstackable>
                            <Form.Group >
                                <Form.Input fluid width="6" style={{ textAlign: 'center' }} />
                                <Form.Input fluid width="10" />
                            </Form.Group>
                            <Form.Input fluid />
                        </Form>
                    </Card.Content>
                    <Card.Content extra textAlign="right" className='lp-computer-card-footer' >
                        <Button animated color='teal' onClick={nextToCarRegisterFormPage}>
                            <Button.Content visible>Next</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right'/>
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
            {/* </Responsive> */}
        </div>
    )
}

export default LicensePlateForm
