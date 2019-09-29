import React from 'react'
import { Form, Select, Responsive, Input } from 'semantic-ui-react'

function BasicCarInformationForm() {

    const brandOptions = [
        {key: '', text: '', value: ''},
        { key: '1', text: 'Toyata', value: 'Toyata' },
        { key: '2', text: 'Honda', value: 'Honda' },
        { key: '3', text: 'Nissan', value: 'Nissan' },
        { key: '4', text: 'Masda', value: 'Masda' },
        { key: '5', text: 'Ford', value: 'Ford' },
    ]

    const modelOptions = [
        {key: '', text: '', value: ''},
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
        {key: '', text: '', value: ''},
        { key: '1', text: '2.0 E i-VTEC 4Doors', value: 'three' },
        { key: '2', text: '2.0 EL i-VTEC 4Doors', value: 'two' },
        { key: '3', text: '2.0 Hybrid i-VTEC 4Doors', value: 'one' },
        { key: '3', text: '2.0 Hybrid TECH i-VTEC 4Doors', value: 'one' },
        { key: '3', text: '2.4 EL i-VTEC 4Doors', value: 'one' },
    ]
    
    const yearOptions = [
        {key: '', text: '', value: ''},
        { key: '1', text: '2019', value: 'three' },
        { key: '2', text: '2018', value: 'two' },
        { key: '3', text: '2017', value: 'one' },
        { key: '3', text: '2016', value: 'one' },
        { key: '3', text: '2015', value: 'one' },
    ]

    const genderOptions = [
        {key: '', text: '', value: ''},
        { key: '1', text: '2019', value: 'three' },
        { key: '2', text: '2018', value: 'two' },
        { key: '3', text: '2017', value: 'one' },
        { key: '3', text: '2016', value: 'one' },
        { key: '3', text: '2015', value: 'one' },
    ]


    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <Form className='cr-form-mobi' size='mini'>
                    <Form.Group widths='4'>
                        <Form.Field
                            control={Select}
                            options={brandOptions}
                            label='ยี่ห้อ'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={modelOptions}
                            label='รุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={modelDetailOptions}
                            label='รายละเอียดรุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={yearOptions}
                            label='ปี่ที่ผลิต'
                            fluid
                        />
                    </Form.Group>
                    <Form.Group widths='2'>
                        <Form.Field
                            control={Input}
                            // options={genderOptions}
                            label='หมายเลขตัวถัง'
                            fluid
                        />
                        <Form.Field
                            control={Input}
                            // options={genderOptions}
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
                            options={brandOptions}
                            label='ยี่ห้อ'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={modelOptions}
                            label='รุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={modelDetailOptions}
                            label='รายละเอียดรุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={yearOptions}
                            label='ปี่ที่ผลิต'
                            fluid
                        />
                    </Form.Group>
                    <Form.Group widths='2'>
                        <Form.Field
                            control={Input}
                            // options={genderOptions}
                            label='หมายเลขตัวถัง'
                            fluid
                        />
                        <Form.Field
                            control={Input}
                            // options={genderOptions}
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
                            options={brandOptions}
                            label='ยี่ห้อ'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={modelOptions}
                            label='รุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={modelDetailOptions}
                            label='รายละเอียดรุ่น'
                            fluid
                        />
                        <Form.Field
                            control={Select}
                            options={yearOptions}
                            label='ปี่ที่ผลิต'
                            fluid
                        />
                    </Form.Group>
                    <Form.Group widths='2'>
                        <Form.Field
                            control={Input}
                            // options={genderOptions}
                            label='หมายเลขตัวถัง'
                            fluid
                        />
                        <Form.Field
                            control={Input}
                            // options={genderOptions}
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
