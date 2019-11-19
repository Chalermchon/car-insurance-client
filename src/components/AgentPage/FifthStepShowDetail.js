import React, { useState } from 'react'
import { Form, Segment, Divider } from 'semantic-ui-react'

export default (props) => {
    
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
            
        </div>
    )
}
