import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

export default () => {
    return (
        <div>
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 650 }}>
                    <Header as='h2'  textAlign='center'>
                        FOR AGENT
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />
                        {/* <Link href="/for-agent"> */}
                            <Button fluid size='large'>
                                LOGIN
                            </Button>
                        {/* </Link> */}

                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>            
        </div>
        
    )
}
