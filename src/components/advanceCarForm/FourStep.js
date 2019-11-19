import React, { useState } from 'react'
import { Form, Responsive, Input, Select, Button, Grid, Icon, Transition, Divider } from 'semantic-ui-react'

export default (props) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true)

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
                        placeholder='222/96'
                        fluid
                    />
                    <Form.Input
                        name='tambon'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        label='แขวง / ตำบล'
                        width='6'
                        placeholder='บางใหญ่'
                        fluid
                    />
                    <Form.Input
                        name='road'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        label='ถนน'
                        width='6'
                        placeholder='รัตนาธิเบศร์'
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
                        placeholder='นนทบุรี'
                        fluid
                    />
                    <Form.Select
                        name='amphoe'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='อำเภอ'
                        width='5'
                        placeholder='บางใหญ่'
                        fluid
                    />
                    <Form.Input
                        name='postalCode'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        // options={genderOptions}
                        label='รหัสไปรษณีย์'
                        width='5'
                        placeholder='11111'
                        fluid
                    />
                </Form.Group>
            </Form>
            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right'  onClick={() => {props.setIsShowStepFive(); setIsHindNextButton(false)}}>
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
