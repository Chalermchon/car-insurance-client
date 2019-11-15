import React, { useState } from 'react'
import { Form, Select, Input, Checkbox, Button } from 'semantic-ui-react'

export default (props) => {    
    const [value, setValue] = useState('1');

    const brandOptions = [
        { key: '1', text: 'Toyata', value: 'Toyata' },
        { key: '2', text: 'Honda', value: 'Honda' },
        { key: '3', text: 'Nissan', value: 'Nissan' },
        { key: '4', text: 'Masda', value: 'Masda' },
        { key: '5', text: 'Ford', value: 'Ford' },
    ]

    const modelOptions = [
        { key: '1', text: 'Accord', value: 'Accord' },
        { key: '2', text: 'Brio', value: 'Brio' },
        { key: '3', text: 'BR-V', value: 'BR-V' },
        { key: '4', text: 'City', value: 'City' },
        { key: '5', text: 'Civic', value: 'Civic' },
        { key: '5', text: 'CR-V', value: 'CR-V' },
        { key: '5', text: 'CR-Z', value: 'CR-Z' },
        { key: '5', text: 'Freed', value: 'Freed' },
        { key: '5', text: 'HR-V', value: 'HR-V' },
        { key: '5', text: 'Insight', value: 'Insight' },
        { key: '5', text: 'Integra', value: 'Integra' },
        { key: '5', text: 'Jazz', value: 'Jazz' },
        { key: '5', text: 'Legend', value: 'Legend' },
        { key: '5', text: 'Mobilio', value: 'Mobilio' },
        { key: '5', text: 'NSX', value: 'NSX' },
        { key: '5', text: 'Odyssey', value: 'Odyssey' },
        { key: '5', text: 'Prelude', value: 'Prelude' },
        { key: '5', text: 'S2000', value: 'S2000' },
        { key: '5', text: 'STEPWGN SPADA', value: 'STEPWGN SPADA' },
        { key: '5', text: 'Stream', value: 'Stream' },
        { key: '5', text: 'Tourmaster', value: 'Tourmaster' },
        { key: '5', text: 'Vigor', value: 'Vigor' },
    ]

    const modelDetailOptions = [
        { key: '1', text: '2.0 E i-VTEC 4Doors', value: 'three' },
        { key: '2', text: '2.0 EL i-VTEC 4Doors', value: 'two' },
        { key: '3', text: '2.0 Hybrid i-VTEC 4Doors', value: 'one' },
        { key: '3', text: '2.0 Hybrid TECH i-VTEC 4Doors', value: 'one' },
        { key: '3', text: '2.4 EL i-VTEC 4Doors', value: 'one' },
    ]
    
    const yearOptions = [
        { key: '1', text: '2019', value: 'three' },
        { key: '2', text: '2018', value: 'two' },
        { key: '3', text: '2017', value: 'one' },
        { key: '3', text: '2016', value: 'one' },
        { key: '3', text: '2015', value: 'one' },
    ]

    const genderOptions = [
        { key: '1', text: 'One', value: 'one' },
        { key: '2', text: 'Two', value: 'two' },
        { key: '3', text: 'Three', value: 'three' },
    ]

    return (
        <div>
            <Form className='cr-form-comp' size='large' >
                <Form.Group widths='2'>
                    <Form.Select
                        name='brand'
                        // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                        options={brandOptions}
                        label='ยี่ห้อ'
                        fluid
                    />
                    
                    <Form.Select
                        name='model'
                        // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                        options={modelOptions}
                        label='รุ่น'
                        fluid
                    />
                </Form.Group>
                <Form.Group widths='2'> 
                    <Form.Select
                        name='yearOfMNF'
                        // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                        options={yearOptions}
                        label='ปี่ที่ผลิต'
                        fluid
                    />
                    <Form.Select
                        name='detailModel'
                        // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                        options={modelDetailOptions}
                        label='รายละเอียดรุ่น'
                        fluid
                    />

                </Form.Group>
                <br/>
                <Form.Group widths='7'>
                    <Form.Field>
                        <b>เลือกชนิดประกัน</b>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 1'
                            name='checkboxRadioGroup'
                            value='1'
                            checked={value === '1'}
                            onChange={() => setValue('1')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 2'
                            name='checkboxRadioGroup'
                            value='2'
                            checked={value === '2'}
                            onChange={() => setValue('2')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 2+'
                            name='checkboxRadioGroup'
                            value='2p'
                            checked={value === '2p'}
                            onChange={() => setValue('2p')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 3'
                            name='checkboxRadioGroup'
                            value='3'
                            checked={value === '3'}
                            onChange={() => setValue('3')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 3+'
                            name='checkboxRadioGroup'
                            value='3p'
                            checked={value === '3p'}
                            onChange={() => setValue('3p')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Button color='teal'onClick={() => {props.setShowCardStatus()}}>สำรวจราคา</Button>
                    </Form.Field>
                </Form.Group>
            </Form>
        </div>
    )
}

