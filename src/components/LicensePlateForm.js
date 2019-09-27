import React from 'react'
import { Form, Card, Responsive, Grid, Button, Icon } from 'semantic-ui-react'

function LicensePlateForm() {
    const nextToCarRegisterFormPage = (e) => {
        window.location = 'car-information'
    }

    return (
        <Grid.Row style={{ paddingBottom: '150px' }}>
            <Grid.Column width="10">
                <Responsive {...Responsive.onlyMobile}>
                    <Card centered fluid link raised>
                        <Card.Content>
                            <Form size="tiny" unstackable>
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
                    <Card centered fluid link style={{ padding: '30px' }} raised>
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
                    <Card centered fluid link style={{backgroundColor: '#f8f8f8', paddingTop: '50px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '0px' }} raised >
                        <Card.Content>
                            <Form size="massive" unstackable>
                                <Form.Group >
                                    <Form.Input fluid width="6" style={{ textAlign: 'center' }} />
                                    <Form.Input fluid width="10" />
                                </Form.Group>
                                <Form.Input fluid />
                            </Form>
                        </Card.Content>
                        <Card.Content extra textAlign="right" style={{ paddingTop: '15px', paddingBottom: '15px' }} >
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
            </Grid.Column>
        </Grid.Row>
    )
}

export default LicensePlateForm
