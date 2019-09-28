import React from 'react'
import { Form, Card, Button, Icon, Responsive } from 'semantic-ui-react'

function LicensePlateForm() {

    const nextToCarRegisterFormPage = (e) => {
        window.location = 'car-information'
    }

    return (
        <div className='lp'>
            <Responsive {...Responsive.onlyMobile}>
                <Card centered fluid link raised>
                    <Card.Content>
                        <Form size="mini" unstackable>
                            <Form.Group>
                                <Form.Input fluid width="6" />
                                <Form.Input fluid width="10" />
                            </Form.Group>
                            <Form.Input fluid />
                        </Form>
                    </Card.Content>
                </Card>
            </Responsive>


            <Responsive {...Responsive.onlyTablet}>
                <Card centered fluid link raised className='lp-tablet-card'>
                    <Card.Content>
                        <Form size="big" unstackable>
                            <Form.Group>
                                <Form.Input fluid width="6" />
                                <Form.Input fluid width="10" />
                            </Form.Group>
                            <Form.Input fluid />
                        </Form>
                    </Card.Content>
                </Card>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
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
                        <Button animated='fade'>
                            <Button.Content visible>Reset</Button.Content>
                            <Button.Content hidden>
                                <Icon name='undo' />
                            </Button.Content>
                        </Button>
                        <Button animated color='green' onClick={nextToCarRegisterFormPage}>
                            <Button.Content visible>Next</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>

            </Responsive>
        </div>
    )
}

export default LicensePlateForm
