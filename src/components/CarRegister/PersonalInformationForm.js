import React, { useState } from 'react'
import { Form, Responsive, Input, Select, Button } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'

function PersonalInformationForm() {
    const [birthDate, setBirthDate] = useState('')

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
        <div>
            {/* <Responsive {...Responsive.onlyMobile}>
                <Form className='cr-form-mobi' size='mini'>

                </Form>
            </Responsive>

            <Responsive {...Responsive.onlyTablet}>
                <Form className='cr-form-tabl' size='small'>

                </Form>
            </Responsive> */}

            <Responsive {...Responsive.onlyComputer}>
                <Form className='cr-form-comp' size='large'>
                    <Form.Group >
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
                        <Form.Field width='3'>
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
                        <Form.Field width='3'>
                            <label>รูปบัตรประชาชน</label>
                            <Button
                                content="เลือกรูปภาพ"
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
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            name='email'
                            // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                            label='อีเมล'
                            width='7'
                            fluid
                        />
                        <Form.Input
                            name='phone'
                            // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                            label='เบอร์โทรศัพท์'
                            width='4'
                            fluid
                        />
                        <Form.Input
                            name='career'
                            // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                            label='อาชีพ'
                            width='5'
                            fluid
                        />
                    </Form.Group>
                    <br />
                    <br />
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
                            options={genderOptions}
                            label='จังหวัด'
                            width='6'
                            fluid
                        />
                        <Form.Select
                            name='amphoe'
                            // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                            options={genderOptions}
                            label='อำเภอ'
                            width='5'
                            fluid
                        />
                        <Form.Input
                            name='postalCode'
                            // onChange={(e, { name, value }) => handleChange(e, { name, value })}
                            options={genderOptions}
                            label='รหัสไปรษณีย์'
                            width='5'
                            fluid
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Field width='16'>
                            <Button type='submit' floated='right'>ยืนยัน</Button>
                        </Form.Field>
                    </Form.Group>

                </Form>

            </Responsive>
        </div>
    )
}

export default PersonalInformationForm
