import React, { useState } from 'react'
import { Form, Responsive, Input, Select, Button, Segment, Icon, Transition, Divider } from 'semantic-ui-react'

export default () => {
    const [isHindNextButton, setIsHindNextButton] = useState(true)
    
    return (
        <div className="carInfoForm">
            <br/>
                <Divider horizontal>more car infomation</Divider>
            <br/>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>HONDA</Segment>
                <Segment textAlign='center' color='teal'>CIVIC</Segment>
                <Segment textAlign='center' color='teal'>2019</Segment>
                <Segment textAlign='center' color='teal'>1.5 SV 4Doors</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>กด 5676</Segment>
                <Segment textAlign='center' color='teal'>กรุุงเทพมหานคร</Segment>
            </Segment.Group>
            <Form>
                <Form.Group>

                    <Form.Input
                        // name='postalCode'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='หมายเลขตัวถัง'
                        width='15'
                        fluid
                    />
                    <Form.Input
                        // name='postalCode'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='หมายเลขเครื่อง'
                        width='15'
                        fluid
                    />
                </Form.Group>
            </Form>

            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right'>
                    <Button.Content visible>ถัดไป</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>                 
            </Transition>
            {/* <style jsx>
                {`
                    .carInfoForm {
                        background-color: #F2F4F4;
                        margin-right: 10%;
                        margin-left: 10%;
                        padding-top: 3%;
                        padding-right: 3%;
                        padding-left: 3%;
                        padding-bottom: 4%;
                    }  
                `}
            </style>              */}
            
        </div>
    )
}
