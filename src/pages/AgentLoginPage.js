import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

export default () => {
    const goToAgentPage = () => {
        window.location = '/agent-page'
    }

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
                            <Button fluid size='large' color="yellow" onClick={goToAgentPage}>
                                LOGIN
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>            
        </div>
        
    )
}
