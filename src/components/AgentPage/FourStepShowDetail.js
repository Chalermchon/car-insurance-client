import React, { useState } from 'react'
import { Form, Divider } from 'semantic-ui-react'

export default () => {

    return (
        <div className="carInfoForm">
            <br/>
                <Divider horizontal>address</Divider>
            <br/>
            <Form>
                <Form.Group>
                    <Form.Input
                        name='houseNumber'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        label='บ้านเลขที่'
                        width='4'
                        fluid
                    />
                    <Form.Input
                        name='tambon'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        label='แขวง / ตำบล'
                        width='6'
                        fluid
                    />
                    <Form.Input
                        name='road'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        label='ถนน'
                        width='6'
                        fluid
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        name='changwat'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='จังหวัด'
                        width='6'
                        fluid
                    />
                    <Form.Select
                        name='amphoe'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='อำเภอ'
                        width='5'
                        fluid
                    />
                    <Form.Input
                        name='postalCode'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='รหัสไปรษณีย์'
                        width='5'
                        fluid
                    />
                </Form.Group>
            </Form>
            
        </div>
    )
}
