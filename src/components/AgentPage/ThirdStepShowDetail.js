import React, { useState } from 'react'
import { Form, Divider, Checkbox } from 'semantic-ui-react'

export default (props) => {
    const [value, setValue] = useState('')
    
    return (
        <div className="carInfoForm">
                <Divider horizontal>occupation</Divider>
            <br/>
            <Form>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='เกษตรกร'
                            // name='checkboxRadioGroup'
                            value='เกษตรกร'
                            checked={value === 'เกษตรกร'}
                            onChange={() => setValue('เกษตรกร')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ข้าราชการ'
                            // name='ข้าราชการ'
                            value='ข้าราชการ'
                            checked={value === 'ข้าราชการ'}
                            onChange={() => setValue('ข้าราชการ')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ข้าราชการบำนาญ'
                            // name='checkboxRadioGroup'
                            value='ข้าราชการบำนาญ'
                            checked={value === 'ข้าราชการบำนาญ'}
                            onChange={() => setValue('ข้าราชการบำนาญ')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ครู / อาจารย์'
                            name='checkboxRadioGroup'
                            value='ครู / อาจารย์'
                            checked={value === 'ครู / อาจารย์'}
                            onChange={() => setValue('ครู / อาจารย์')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='เจ้าของกิจการ'
                            name='checkboxRadioGroup'
                            value='เจ้าของกิจการ'
                            checked={value === 'เจ้าของกิจการ'}
                            onChange={() => setValue('เจ้าของกิจการ')}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ตำรวจ'
                            // name='checkboxRadioGroup'
                            value='ตำรวจ'
                            checked={value === 'ตำรวจ'}
                            onChange={() => setValue('ตำรวจ')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักกฎหมาย'
                            // name='ข้าราชการ'
                            value='นักกฎหมาย'
                            checked={value === 'นักกฎหมาย'}
                            onChange={() => setValue('นักกฎหมาย')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักคอมพิวเตอร์'
                            // name='checkboxRadioGroup'
                            value='นักคอมพิวเตอร์'
                            checked={value === 'นักคอมพิวเตอร์'}
                            onChange={() => setValue('นักคอมพิวเตอร์')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักการเมือง'
                            // name='checkboxRadioGroup'
                            value='นักการเมือง'
                            checked={value === 'นักการเมือง'}
                            onChange={() => setValue('นักการเมือง')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักบวช'
                            // name='checkboxRadioGroup'
                            value='นักบวช'
                            checked={value === 'นักบวช'}
                            onChange={() => setValue('นักบวช')}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักบัญชี'
                            // name='checkboxRadioGroup'
                            value='นักบัญชี'
                            checked={value === 'นักบัญชี'}
                            onChange={() => setValue('นักบัญชี')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักเรียน / นักศึกษา'
                            // name='ข้าราชการ'
                            value='นักเรียน / นักศึกษา'
                            checked={value === 'นักเรียน / นักศึกษา'}
                            onChange={() => setValue('นักเรียน / นักศึกษา')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พนักงานบริษัท'
                            // name='checkboxRadioGroup'
                            value='พนักงานบริษัท'
                            checked={value === 'พนักงานบริษัท'}
                            onChange={() => setValue('พนักงานบริษัท')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พนักงานของรัฐ'
                            // name='checkboxRadioGroup'
                            value='พนักงานของรัฐ'
                            checked={value === 'พนักงานของรัฐ'}
                            onChange={() => setValue('พนักงานของรัฐ')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พนักงานรัฐวิสาหกิจ'
                            // name='checkboxRadioGroup'
                            value='พนักงานรัฐวิสาหกิจ'
                            checked={value === 'พนักงานรัฐวิสาหกิจ'}
                            onChange={() => setValue('พนักงานรัฐวิสาหกิจ')}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พ่อบ้าน / แม่บ้าน'
                            // name='checkboxRadioGroup'
                            value='พ่อบ้าน / แม่บ้าน'
                            checked={value === 'พ่อบ้าน / แม่บ้าน'}
                            onChange={() => setValue('พ่อบ้าน / แม่บ้าน')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='แพทย์ / สัตวแพทย์'
                            // name='ข้าราชการ'
                            value='แพทย์ / สัตวแพทย์'
                            checked={value === 'แพทย์ / สัตวแพทย์'}
                            onChange={() => setValue('แพทย์ / สัตวแพทย์')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='รับจ้าง'
                            // name='checkboxRadioGroup'
                            value='รับจ้าง'
                            checked={value === 'รับจ้าง'}
                            onChange={() => setValue('รับจ้าง')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='วิศวกร'
                            // name='checkboxRadioGroup'
                            value='วิศวกร'
                            checked={value === 'วิศวกร'}
                            onChange={() => setValue('วิศวกร')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ศิลปิน / นักแสดง'
                            // name='checkboxRadioGroup'
                            value='ศิลปิน / นักแสดง'
                            checked={value === 'ศิลปิน / นักแสดง'}
                            onChange={() => setValue('ศิลปิน / นักแสดง')}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='3'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='บุคลากรทางการแพทย์'
                            // name='checkboxRadioGroup'
                            value='บุคลากรทางการแพทย์'
                            checked={value === 'บุคลากรทางการแพทย์'}
                            onChange={() => setValue('บุคลากรทางการแพทย์')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='อาชีพอิสระ'
                            // name='ข้าราชการ'
                            value='อาชีพอิสระ'
                            checked={value === 'อาชีพอิสระ'}
                            onChange={() => setValue('นอาชีพอิสระ')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ทหาร'
                            // name='checkboxRadioGroup'
                            value='ทหาร'
                            checked={value === 'ทหาร'}
                            onChange={() => setValue('ทหาร')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='สถาปนิก'
                            // name='checkboxRadioGroup'
                            value='สถาปนิก'
                            checked={value === 'สถาปนิก'}
                            onChange={() => setValue('สถาปนิก')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            name='other'
                            // onChange={(e, { name, value }) => handleChange(e, {name, value})}
                            label='อื่นๆ โปรดระบุ'
                            width='15'
                            fluid
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
            
        </div>
    )
}
