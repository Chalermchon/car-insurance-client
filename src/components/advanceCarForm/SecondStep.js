import React, { useState, createRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Form, Responsive, Input, Select, Button, TransitionablePortal,
    Icon, Transition, Divider, Message
} from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'
import { setCustomerInformation } from '../../redux/action'

export default (props) => {
    const [isHindNextButton, setIsHindNextButton] = useState(true)

    const customerInformation = useSelector(state => state.customerInformation)
    const oldCustomer = useSelector(state => state.oldCustomer)

    const namePrefix = customerInformation.namePrefix
    const firstName = customerInformation.firstName
    const lastName = customerInformation.lastName
    const identNumber = customerInformation.identNumber
    const birthDate = customerInformation.birthDate
    const identImg = customerInformation.identImg
    const email = customerInformation.email
    const phone = customerInformation.phone

    const [haveIdentNumberError, setHaveIdentNumberError] = useState(false)
    const [haveImgError, setHaveImgError] = useState(false)
    const [haveError, setHaveError] = useState(false)

    const fileRef = createRef();
    const dispatch = useDispatch();

    const genderOptions = [
        { key: '0', text: 'นาย', value: 'นาย' },
        { key: '1', text: 'นาง', value: 'นาง' },
        { key: '2', text: 'นางสาว', value: 'นางสาว' },
    ]

    const fileChange = e => {
        let file = e.target.files[0];
        if (file) {
            if (file.type.split('/')[0] === 'image' && file.type.split('/')[1] !== 'gif') {
                dispatch(setCustomerInformation({
                    namePrefix,
                    firstName,
                    lastName,
                    identNumber,
                    birthDate,
                    identImg: file,
                    email,
                    phone
                }));
            } else {
                setHaveImgError(true)
            }
        }

    };

    const handleNextButton = () => {
        if ((namePrefix !== '' && firstName !== '' && lastName !== '' &&
            identNumber !== '' && birthDate !== '' && identImg &&
            email !== '' && phone !== '') || (oldCustomer && (firstName !== '' &&
            lastName !== '' && email !== '' && phone !== ''))
        ) {
            if (identNumber.length !== 13) {
                setHaveIdentNumberError(true)
            } else {
                console.log(namePrefix + ' ' + firstName + ' ' + lastName);
                console.log(identNumber);
                console.log(birthDate);
                console.log(email + ' ' + phone);
                console.log(identImg)

                props.setIsShowStepThree()
                setIsHindNextButton(false)
            }
        } else {
            setHaveError(true);
        }
        //TODO: Test
        // props.setIsShowStepThree()
        // setIsHindNextButton(false)
    }

    return (
        <div className='carInfoForm'>
            <br />
            <Divider horizontal>personal infomation</Divider>
            <br />

            <Form className='cr-form-comp' size='large'>
                <Form.Group>
                    <Form.Field
                        control={oldCustomer ? Input : Select}
                        readOnly={oldCustomer}
                        value={namePrefix}
                        onChange={(e, { value }) => {
                            dispatch(setCustomerInformation({
                                namePrefix: value,
                                firstName,
                                lastName,
                                identNumber,
                                birthDate,
                                identImg,
                                email,
                                phone
                            }))
                        }}
                        options={genderOptions}
                        label='คำนำหน้าชื่อ'
                        width='4'
                        fluid
                    />
                    <Form.Input
                        value={firstName}
                        name='firstName'
                        onChange={(e, { value }) => {
                            dispatch(setCustomerInformation({
                                namePrefix,
                                firstName: value,
                                lastName,
                                identNumber,
                                birthDate,
                                identImg,
                                email,
                                phone
                            }))
                        }}
                        label='ชื่อจริง'
                        width='6'
                        fluid
                    />
                    <Form.Input
                        value={lastName}
                        name='lastName'
                        onChange={(e, { value }) => {
                            dispatch(setCustomerInformation({
                                namePrefix,
                                firstName,
                                lastName: value,
                                identNumber,
                                birthDate,
                                identImg,
                                email,
                                phone
                            }))
                        }}
                        label='นามสกุล'
                        width='6'
                        fluid
                    />

                </Form.Group>
                <Form.Group >
                    <Form.Field width='5'>
                        <label>วัน เดือน ปี เกิด</label>
                        <DateInput
                            readOnly={oldCustomer}
                            value={birthDate}
                            onChange={(e, { value }) => {
                                dispatch(setCustomerInformation({
                                    namePrefix,
                                    firstName,
                                    lastName,
                                    identNumber,
                                    birthDate: value,
                                    identImg,
                                    email,
                                    phone
                                }))
                            }}
                            startMode='year'
                            iconPosition="right"
                            hideMobileKeyboard
                            popupPosition='top center'
                            closable
                            animation='none'
                            dateFormat='YYYY-MM-DD'
                            maxDate={((new Date()).getFullYear() - 18) + '-' + ((new Date()).getMonth() + 1) + '-' + ((new Date()).getDate())}
                            initialDate={((new Date()).getFullYear() - 18) + '-' + ((new Date()).getMonth() + 1) + '-' + ((new Date()).getDate())}
                        />
                    </Form.Field>
                    <Form.Input
                        readOnly={oldCustomer}
                        value={identNumber}
                        onChange={(e, { value }) => {
                            if (value.length > 13) {
                                setHaveIdentNumberError(true)
                            }
                            if (! "1234567890".includes(value.charAt(value.length - 1))) {
                                setHaveIdentNumberError(true)
                            }
                            dispatch(setCustomerInformation({
                                namePrefix,
                                firstName,
                                lastName,
                                identNumber: value,
                                birthDate,
                                identImg,
                                email,
                                phone
                            }))
                        }}
                        label='เลขบัตรประชาชน'
                        width='6'
                        fluid
                    />
                    <Form.Field width='5'>
                        <label>รูปบัตรประชาชน</label>
                        <Button
                            disabled={oldCustomer}
                            content={identImg ? (identImg.name.length > 7 ? identImg.name.substr(0, 6).concat('...') : identImg.name) : 'อัพโหลดรูปภาพ'}
                            labelPosition="right"
                            icon="file"
                            style={{
                                backgroundColor: 'white', border: '1px solid rgba(34,36,38,.15)',
                                textAlign: 'left', paddingRight: '4.2em!important'
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

                </Form.Group>
                <Form.Group style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Form.Field width='6'>
                        <Form.Input
                            name='email'
                            value={email}
                            onChange={(e, { value }) => {
                                dispatch(setCustomerInformation({
                                    namePrefix,
                                    firstName,
                                    lastName,
                                    identNumber,
                                    birthDate,
                                    identImg,
                                    email: value,
                                    phone
                                }))
                            }}
                            label='อีเมล'
                            fluid
                        />

                    </Form.Field>
                    <Form.Field width='5'>
                        <Form.Input
                            name='phone'
                            value={phone}
                            onChange={(e, { value }) => {
                                dispatch(setCustomerInformation({
                                    namePrefix,
                                    firstName,
                                    lastName,
                                    identNumber,
                                    birthDate,
                                    identImg,
                                    email,
                                    phone: value
                                }))
                            }}
                            label='เบอร์โทรศัพท์'
                            fluid
                        />
                    </Form.Field>

                </Form.Group>
                <br />
                <br />
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
            <TransitionablePortal
                open={haveIdentNumberError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => {
                    setHaveIdentNumberError(false)
                    dispatch(setCustomerInformation({
                        namePrefix,
                        firstName,
                        lastName,
                        identNumber: '',
                        birthDate,
                        identImg,
                        email,
                        phone
                    }))
                }}
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
                        เลขบัตรประชาชนของคุณไม่ถูกต้อง
                    </Message.Header>

                </Message>
            </TransitionablePortal>
        </div>
    )
}
