import React, { useState, createRef, useEffect } from 'react'
import { Form, Responsive, Input, Select, Button, TransitionablePortal, Icon, Transition, Divider, Message } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'

export default (props) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true)

    const [namePrefix, setNamePrefix] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [identNumber, setIdentNumber] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [img, setImg] = useState(null)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [haveImgError, setHaveImgError] = useState(false)
    const [haveError, setHaveError] = useState(false)

    const fileRef = createRef();

    const genderOptions = [
        { key: '0', text: 'นาย', value: 'นาย' },
        { key: '1', text: 'นาง', value: 'นาง' },
        { key: '2', text: 'นางสาว', value: 'นางสาว' },
    ]
    const identNumberOption = [
        { key: 'ni', text: 'เลขบัตรประชาชน', value: 'nin' },
        { key: 'pp', text: 'เลขหนังสือเดินทาง', value: 'ppn' },
    ]

    const fileChange = e => {
        let file = e.target.files[0];
        if (file) {
            if (file.type.split('/')[0] === 'image' && file.type.split('/')[1] !== 'gif') {
                setImg(file);
            } else {
                setHaveImgError(true)
            }
        }

    };

    const handleNextButton = () => {
        if (namePrefix !== '' && firstName !== '' && lastName !== '' &&
            identNumber !== '' && birthDate !== '' && img &&
            email !== '' && phone !== ''
        ) {
            console.log(namePrefix + ' ' + firstName + ' ' + lastName);
            console.log(identNumber);
            console.log(birthDate);
            console.log(email + ' ' + phone);
            console.log(img)
            
            props.setIsShowStepThree()
            setIsHindNextButton(false) 
        } else {
            setHaveError(true);
        }
    }

    return (
        <div className='carInfoForm'>
            <br />
            <Divider horizontal>personal infomation</Divider>
            <br />

            <Form className='cr-form-comp' size='large'>
                <Form.Group>
                    <Form.Select
                        value={namePrefix}
                        onChange={(e, { value }) => setNamePrefix(value)}
                        options={genderOptions}
                        label='คำนำหน้าชื่อ'
                        placeholder='นาย'
                        width='4'
                        fluid
                    />
                    <Form.Input
                        value={firstName}
                        name='firstName'
                        onChange={(e, { value }) => setFirstName(value)}
                        label='ชื่อจริง'
                        width='6'
                        placeholder='กฤษฎิ์ภวินท์'
                        fluid
                    />
                    <Form.Input
                        value={lastName}
                        name='lastName'
                        onChange={(e, { value }) => setLastName(value)}
                        label='นามสกุล'
                        width='6'
                        placeholder='ชัยวงศ์'
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
                            placeholder='2244734981650'
                        >
                            <input  value={identNumber} onChange={(e) => setIdentNumber(e.target.value)}/>
                            <Select compact options={identNumberOption} defaultValue='nin' />
                        </Input>
                    </Form.Field>
                    <Form.Field width='6'>
                        <label>วัน เดือน ปี เกิด</label>
                        <DateInput
                            name="birthDate"
                            value={birthDate}
                            onChange={(e, {value}) => { setBirthDate(value) }}
                            startMode='year'
                            iconPosition="right"
                            hideMobileKeyboard
                            closable
                            animation='none'
                            dateFormat='YYYY-MM-DD'
                            placeholder='1999-08-12'
                            maxDate={((new Date()).getFullYear()-18) + '-' + ((new Date()).getMonth()) + '-' + ((new Date()).getDate() + 1)}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field width='4'>
                        <label>รูปบัตรประชาชน</label>
                        <Button
                            content={img ? (img.name.length > 7 ? img.name.substr(0, 6).concat('...') : img.name) : 'อัพโหลดรูปภาพ'}
                            labelPosition="right"
                            icon="file"
                            style={{
                                backgroundColor: 'white', border: '1px solid rgba(34,36,38,.15)',
                                textAlign: 'center', paddingRight: '4.2em!important'
                            }}
                            size='large'
                            onClick={() => fileRef.current.click()}
                            fluid
                        />
                        <input
                            ref={fileRef}
                            name='identImg'
                            type="file"
                            hidden
                            onChange={(e) => fileChange(e)}
                        />
                    </Form.Field>
                    <Form.Field width='6'>
                        <Form.Input
                            name='email'
                            value={email}
                            onChange={(e, { value }) => setEmail(value)}
                            label='อีเมล'
                            placeholder='kitpavin@gmail.com'
                            fluid
                        />

                    </Form.Field>
                    <Form.Field width='6'>
                        <Form.Input
                            name='phone'
                            value={phone}
                            onChange={(e, { value }) => setPhone(value)}
                            label='เบอร์โทรศัพท์'
                            placeholder='08458XXXXXX'
                            fluid
                        />
                    </Form.Field>

                </Form.Group>
                <br />
                <br />
            </Form>
            <Transition visible={isHindNextButton} animation='scale' duration={500}>
                <Button animated color='teal' floated='right' onClick={() => {handleNextButton()}}>
                    <Button.Content visible>ถัดไป</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Transition>

            <TransitionablePortal
                open={haveImgError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => setHaveImgError(false)}
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
                        กรุณาเลือกไฟล์ที่เป็นรูปภาพ
                    </Message.Header>

                </Message>
            </TransitionablePortal>
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
