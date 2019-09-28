import React from 'react'
import { Form, Select, Responsive, Input } from 'semantic-ui-react'

function BasicCarInformationForm() {

    const genderOptions = [
        { key: '1', text: 'One', value: 'three' },
        { key: '2', text: 'Two', value: 'two' },
        { key: '3', text: 'Three', value: 'one' },
    ]

    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <Form className='cr-form-mobi' size='mini'>
                    <Form.Group widths='4'>
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='ยี่ห้อ'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='รุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='รายละเอียดรุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='ปี่ที่ผลิต'
                            fluid
                        />
                    </Form.Group>
                    <Form.Group widths='2'>
                        <Form.Field
                            control={Input}
                            options={genderOptions}
                            label='หมายเลขตัวถัง'
                            fluid
                        />
                        <Form.Field
                            control={Input}
                            options={genderOptions}
                            label='หมายเลขตัวเครื่อง'
                            fluid
                        />
                    </Form.Group>
                </Form>
            </Responsive>

            <Responsive {...Responsive.onlyTablet}>
                <Form className='cr-form-tabl' size='small'>
                    <Form.Group widths='4'>
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='ยี่ห้อ'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='รุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='รายละเอียดรุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='ปี่ที่ผลิต'
                            fluid
                        />
                    </Form.Group>
                    <Form.Group widths='2'>
                        <Form.Field
                            control={Input}
                            options={genderOptions}
                            label='หมายเลขตัวถัง'
                            fluid
                        />
                        <Form.Field
                            control={Input}
                            options={genderOptions}
                            label='หมายเลขตัวเครื่อง'
                            fluid
                        />
                    </Form.Group>

                </Form>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
                <Form className='cr-form-comp' size='large'>
                    <Form.Group widths='4'>
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='ยี่ห้อ'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='รุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='รายละเอียดรุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label='ปี่ที่ผลิต'
                            fluid
                        />
                    </Form.Group>
                    <Form.Group widths='2'>
                        <Form.Field
                            control={Input}
                            options={genderOptions}
                            label='หมายเลขตัวถัง'
                            fluid
                        />
                        <Form.Field
                            control={Input}
                            options={genderOptions}
                            label='หมายเลขตัวเครื่อง'
                            fluid
                        />
                    </Form.Group>
                </Form>

            </Responsive>
        </div>

    )
}

export default BasicCarInformationForm
