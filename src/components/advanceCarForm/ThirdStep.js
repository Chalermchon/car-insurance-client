import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Responsive, TransitionablePortal, Message, Button, Grid, Icon, Transition, Divider, Checkbox } from 'semantic-ui-react'
import { setCareerCustomer } from '../../redux/action';

export default (props) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true)
    
    const career = useSelector(state => state.customerInformation.career)

    const [haveError, setHaveError] = useState(false)

    const dispatch = useDispatch();

    const handleNextButton = () => {
        if (career !== '') {
            props.setIsShowStepFour()
            setIsHindNextButton(false)
        } else {
            setHaveError(true);
        }
        //TODO: Test
        // props.setIsShowStepFour()
        // setIsHindNextButton(false)
    }

    return (
        <div className="carInfoForm">
            <Divider horizontal>occupation</Divider>
            <br />
            <Form>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='เกษตรกร'
                            checked={career === 'เกษตรกร'}
                            onChange={() => dispatch(setCareerCustomer('เกษตรกร'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ข้าราชการ'
                            checked={career === 'ข้าราชการ'}
                            onChange={() => dispatch(setCareerCustomer('ข้าราชการ'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ข้าราชการบำนาญ'
                            checked={career === 'ข้าราชการบำนาญ'}
                            onChange={() => dispatch(setCareerCustomer('ข้าราชการบำนาญ'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ครู / อาจารย์'
                            checked={career === 'ครู / อาจารย์'}
                            onChange={() => dispatch(setCareerCustomer('ครู / อาจารย์'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='เจ้าของกิจการ'
                            checked={career === 'เจ้าของกิจการ'}
                            onChange={() => dispatch(setCareerCustomer('เจ้าของกิจการ'))}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ตำรวจ'
                            checked={career === 'ตำรวจ'}
                            onChange={() => dispatch(setCareerCustomer('ตำรวจ'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักกฎหมาย'
                            checked={career === 'นักกฎหมาย'}
                            onChange={() => dispatch(setCareerCustomer('นักกฎหมาย'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักคอมพิวเตอร์'
                            checked={career === 'นักคอมพิวเตอร์'}
                            onChange={() => dispatch(setCareerCustomer('นักคอมพิวเตอร์'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักการเมือง'
                            checked={career === 'นักการเมือง'}
                            onChange={() => dispatch(setCareerCustomer('นักการเมือง'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักบวช'
                            checked={career === 'นักบวช'}
                            onChange={() => dispatch(setCareerCustomer('นักบวช'))}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักบัญชี'
                            checked={career === 'นักบัญชี'}
                            onChange={() => dispatch(setCareerCustomer('นักบัญชี'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='นักเรียน / นักศึกษา'
                            checked={career === 'นักเรียน / นักศึกษา'}
                            onChange={() => dispatch(setCareerCustomer('นักเรียน / นักศึกษา'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พนักงานบริษัท'
                            checked={career === 'พนักงานบริษัท'}
                            onChange={() => dispatch(setCareerCustomer('พนักงานบริษัท'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พนักงานของรัฐ'
                            checked={career === 'พนักงานของรัฐ'}
                            onChange={() => dispatch(setCareerCustomer('พนักงานของรัฐ'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พนักงานรัฐวิสาหกิจ'
                            checked={career === 'พนักงานรัฐวิสาหกิจ'}
                            onChange={() => dispatch(setCareerCustomer('พนักงานรัฐวิสาหกิจ'))}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='5'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='พ่อบ้าน / แม่บ้าน'
                            checked={career === 'พ่อบ้าน / แม่บ้าน'}
                            onChange={() => dispatch(setCareerCustomer('พ่อบ้าน / แม่บ้าน'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='แพทย์ / สัตวแพทย์'
                            checked={career === 'แพทย์ / สัตวแพทย์'}
                            onChange={() => dispatch(setCareerCustomer('แพทย์ / สัตวแพทย์'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='รับจ้าง'
                            checked={career === 'รับจ้าง'}
                            onChange={() => dispatch(setCareerCustomer('รับจ้าง'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='วิศวกร'
                            checked={career === 'วิศวกร'}
                            onChange={() => dispatch(setCareerCustomer('วิศวกร'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ศิลปิน / นักแสดง'
                            checked={career === 'ศิลปิน / นักแสดง'}
                            onChange={() => dispatch(setCareerCustomer('ศิลปิน / นักแสดง'))}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group widths='3'>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='บุคลากรทางการแพทย์'
                            checked={career === 'บุคลากรทางการแพทย์'}
                            onChange={() => dispatch(setCareerCustomer('บุคลากรทางการแพทย์'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='อาชีพอิสระ'
                            checked={career === 'อาชีพอิสระ'}
                            onChange={() => dispatch(setCareerCustomer('นอาชีพอิสระ'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ทหาร'
                            checked={career === 'ทหาร'}
                            onChange={() => dispatch(setCareerCustomer('ทหาร'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='สถาปนิก'
                            checked={career === 'สถาปนิก'}
                            onChange={() => dispatch(setCareerCustomer('สถาปนิก'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                            name='other'
                            onChange={(e, { career }) => dispatch(setCareerCustomer(career))}
                            label='อื่นๆ โปรดระบุ'
                            width='15'
                            fluid
                        />
                    </Form.Field>
                </Form.Group>
            </Form>

            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right' onClick={() => { handleNextButton() }}>
                    <Button.Content visible>ถัดไป</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Transition>
            <TransitionablePortal
                open={haveError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => setHaveError(false)}
            >
                <Message
                    error
                    header
                    size='large'
                    style={{
                        left: '30vw', right: '30vw', position: 'fixed', top: '15vh',
                        textAlign: 'center', boxShadow: '0px 5px 10px #b3b3b3'
                    }}
                >
                    <Message.Header>
                        <Icon name='warning' />
                        กรุณากรอกข้อมูลให้ครบถ้วน
                    </Message.Header>

                </Message>
            </TransitionablePortal>
        </div>
    )
}
