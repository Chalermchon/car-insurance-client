import React, { useState } from 'react'
import { Segment, Form } from 'semantic-ui-react'

export default (props) => {

    const dayOptions = [
        { key: '1', text: '1', value: '1' },
        { key: '2', text: '2', value: '2' },
        { key: '3', text: '3', value: '3' },
        { key: '4', text: '4', value: '4' },
        { key: '5', text: '5', value: '5' },
        { key: '6', text: '6', value: '6' },
        { key: '7', text: '7', value: '7' },
        { key: '8', text: '8', value: '8' },
        { key: '9', text: '9', value: '9' },
        { key: '10', text: '10', value: '10' },
    ]

    const monthOptions = [
        { key: '1', text: 'มกราคม', value: 'มกราคม' },
        { key: '2', text: 'กุมภาพันธ์', value: 'กุมภาพันธ์' },
        { key: '3', text: 'มีนาคม', value: 'มีนาคม' },
        { key: '4', text: 'เมษายน', value: 'เมษายน' },
        { key: '5', text: 'พฤษภาคม', value: 'พฤษภาคม' },
        { key: '6', text: 'มิถุนายน', value: 'มิถุนายน' },
        { key: '7', text: 'กรกฎาคม', value: 'กรกฎาคม' },
        { key: '8', text: 'สิงหาคม', value: 'สิงหาคม' },
        { key: '9', text: 'กันยายน', value: 'กันยายน' },
        { key: '10', text: 'ตุลาคม', value: 'ตุลาคม' },
        { key: '11', text: 'พฤศจิกายน', value: 'พฤศจิกายน' },
        { key: '12', text: 'ธันวาคม', value: 'ธันวาคม' },
    ]

    const yearOptions = [
        { key: '1', text: '2562', value: '2562' },
        { key: '1', text: '2563', value: '2563' }
    ]

    return (
        <div className="carInfoForm">
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>HONDA</Segment>
                <Segment textAlign='center' color='teal'>CIVIC</Segment>
                <Segment textAlign='center' color='teal'>2019</Segment>
                <Segment textAlign='center' color='teal'>2+ minimal</Segment>
            </Segment.Group>

            <Form className='cr-form-comp' size='large'>
                <Form.Group>
                    <Form.Select
                        name='protectDate'
                        options={dayOptions}
                        label='วันเริ่มคุ้มครอง'
                        width='4'
                        fluid
                    />
                    <Form.Select
                        name='protectMonth'
                        options={monthOptions}
                        label='เดือนเริ่มคุ้มครอง'
                        width='8'
                        fluid
                    />
                    <Form.Select
                        name='protectYear'
                        options={yearOptions}
                        label='ปีเริ่มคุ้มครอง'
                        width='5'
                        fluid
                    />
                </Form.Group>
            </Form>      
        </div>
    )
}
