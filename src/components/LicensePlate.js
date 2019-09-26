import React from 'react'
import { Form, Card, Responsive } from 'semantic-ui-react'

function LicensePlate() {
    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <Card centered fluid link>
                    <Card.Content>
                        <Form size="tiny" unstackable>
                            <Form.Group>
                                <Form.Input fluid placeholder='First name' width="6" />
                                <Form.Input fluid placeholder='Last name' width="10" />
                            </Form.Group>
                            <Form.Input fluid placeholder='Last name' />
                        </Form>
                    </Card.Content>
                </Card>
            </Responsive>

            <Responsive {...Responsive.onlyTablet}>
                <Card centered fluid link style={{ padding: '30px' }}>
                    <Card.Content>
                        <Form size="big" unstackable>
                            <Form.Group>
                                <Form.Input fluid placeholder='First name' width="6" />
                                <Form.Input fluid placeholder='Last name' width="10" />
                            </Form.Group>
                            <Form.Input fluid placeholder='Last name' />
                        </Form>
                    </Card.Content>
                </Card>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
                <Card centered fluid link style={{ padding: '50px' }}>
                    <Card.Content>
                        <Form size="massive" unstackable>
                            <Form.Group >
                                <Form.Input fluid placeholder='First name' width="6" />
                                <Form.Input fluid placeholder='Last name' width="10" />
                            </Form.Group>
                            <Form.Input fluid placeholder='Last name' />
                        </Form>
                    </Card.Content>
                </Card>
            </Responsive>
        </div>
    )
}

export default LicensePlate
