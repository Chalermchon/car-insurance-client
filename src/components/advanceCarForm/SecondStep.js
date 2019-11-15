import React, { useState } from 'react'
import { Form, Responsive, Input, Select, Button, Grid, Icon, Transition, Divider } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'

export default (props) => {
    const [birthDate, setBirthDate] = useState('')
    const [isHindNextButton, setIsHindNextButton] = useState(true)

    const genderOptions = [
        { key: '1', text: 'One', value: 'one' },
        { key: '2', text: 'Two', value: 'two' },
        { key: '3', text: 'Three', value: 'three' },
    ]
    const identNumber = [
        { key: 'ni', text: 'เลขบัตรประชาชน', value: 'nin' },
        { key: 'pp', text: 'เลขหนังสือเดินทาง', value: 'ppn' },
    ]
  
    const onChange = (event, { value }) => {
        setBirthDate(value)
    }
    return (
        <div className='carInfoForm'>
            <br/>
            <Divider horizontal>personal infomation</Divider>
            <br/>

            <Form className='cr-form-comp' size='large'>
                <Form.Group>
                    <Form.Select
                        name='namePrefix'
                        // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                        options={genderOptions}
                        label='คำนำหน้าชื่อ'
                        width='4'
                        fluid
                    />
                    <Form.Input
                        name='firstName'
                        // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                        label='ชื่อจริง'
                        width='6'
                        fluid
                    />
                    <Form.Input
                        name='lastName'
                        // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                        label='นามสกุล'
                        width='6'
                        fluid
                    />

                </Form.Group>
                <Form.Group >
                    <Form.Field width='10'>
                        <label>เลขบัตรประชาชน / เลขหนังสือเดินทาง</label>
                        <Input
                            type='text'
                            action
                            name='identNumber'
                        >
                            <input />
                            <Select compact options={identNumber} defaultValue='nin' />
                        </Input>
                    </Form.Field>
                    <Form.Field width='6'>
                        <label>วันเดือนปีเกิด</label>
                        <DateInput
                            name="birthDate"
                            value={birthDate}
                            onChange={onChange}
                            startMode='year'
                            iconPosition="right"
                            hideMobileKeyboard
                            closable
                            animation='none'
                            clearable
                        />
                    </Form.Field>
                    {/* <Form.Field width='3'>
                        <label>รูปบัตรประชาชน</label>
                        <Button
                            content="รูปภาพ"
                            labelPosition="right"
                            icon="file"
                            basic
                            size='large'
                        // onClick={() => this.fileInputRef.current.click()}
                        />
                        <input
                            // ref={this.fileInputRef}
                            name='identImg'
                            type="file"
                            hidden
                        // onChange={this.fileChange}
                        />
                    </Form.Field> */}
                </Form.Group>
                <Form.Group>
                    <Form.Field width='5'>
                        <label>รูปบัตรประชาชน</label>
                        <Button
                            content="รูปภาพ"
                            labelPosition="right"
                            icon="file"
                            basic
                            size='large'
                        // onClick={() => this.fileInputRef.current.click()}
                        />
                        <input
                            // ref={this.fileInputRef}
                            name='identImg'
                            type="file"
                            hidden
                        // onChange={this.fileChange}
                        />
                    </Form.Field>
                    {/* <Form.Field width='10'> */}
                        <Form.Input
                            name='email'
                            // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                            label='อีเมล'
                            width='16'
                            fluid
                        />
                        <Form.Input
                            name='phone'
                            // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                            label='เบอร์โทรศัพท์'
                            width='13'
                            fluid
                        />                        
                    {/* </Form.Field> */}

                </Form.Group>
                <br />
                <br />
            </Form>   
            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right'  onClick={() =>{ props.setIsShowStepThree(); setIsHindNextButton(false)}}>
                    <Button.Content visible>ถัดไป</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>                        
            </Transition>
        </div>
    )
}
