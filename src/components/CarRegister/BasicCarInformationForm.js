import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from "react-redux";
import { Form, Checkbox, Button, Dimmer, Message, TransitionablePortal, Icon } from 'semantic-ui-react'

import axios from "../../axios";
import { setCarSery, setInsuranceGroup } from '../../redux/action';

export default (props) => {

    const dispatch = useDispatch();

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const [notError, setNotError] = useState(true)

    const [value, setValue] = useState('');

    const [brand, setBrand] = useState('');
    const prevBrand = usePrevious(brand);
    const [model, setModel] = useState('');
    const prevModel = usePrevious(model);
    const [year, setYear] = useState('');
    const prevYear = usePrevious(year);
    const [detail, setDetail] = useState('');

    const [brandsOption, setBrandsOption] = useState([]);
    const [modelsOption, setModelsOption] = useState([]);
    const [yearsOption, setYearsOption] = useState([]);
    const [detailsOption, setDetailsOption] = useState([]);

    const getDataOfOption = (path, setMethod) => {
        axios.get(path).then(res => {
            if (res.status === 200) {
                const arr = res.data.data.map((value, index) => {
                    return {
                        key: `${index}`,
                        text: `${value}`,
                        value: `${value.replace(/ /g, '-')}`
                    };
                });
                setMethod(arr);
            }
        })
    }

    useEffect(() => {
        if (!brandsOption.length) {
            getDataOfOption(`/api/car-series/brands`, setBrandsOption);
        }
        if (brand !== prevBrand) {
            setModel('');
            setYear('');
            setDetail('');
            getDataOfOption(`/api/car-series/models/${brand}`, setModelsOption);
        }
        if (model !== prevModel) {
            setYear('');
            setDetail('');
            getDataOfOption(`/api/car-series/years/${model}`, setYearsOption);
        }
        if (year !== prevYear) {
            setDetail('');
            getDataOfOption(`/api/car-series/details/${model}/${year}`, setDetailsOption);
        }

    }, [brand, model, year]);

    const handleClickShowRatePrice = () => {
        if (brand !== '' && model !== '' && year !== '' && detail !== '' && value !== '') {
            dispatch(setCarSery({ brand, model, year, detail }))
            dispatch(setInsuranceGroup(value))
            props.setShowCardOfInsurance(true)
            setNotError(true)
        } else {
            setNotError(false)
        }
    }

    return (
        <div>
            <Form className='cr-form-comp' size='large' >
                <Form.Group widths='2'>
                    <Form.Select
                        name='brand'
                        value={brand}
                        options={brandsOption}
                        label='ยี่ห้อ'
                        fluid
                        onChange={(e, v) => { setBrand(v.value) }}
                    />

                    <Form.Select
                        name='model'
                        value={model}
                        options={modelsOption}
                        label='รุ่น'
                        fluid
                        disabled={!brand}
                        onChange={(e, v) => { setModel(v.value) }}
                    />
                </Form.Group>
                <Form.Group widths='2'>
                    <Form.Select
                        name='yearOfMNF'
                        value={year}
                        options={yearsOption}
                        label='ปี่ที่ผลิต'
                        fluid
                        disabled={!model}
                        onChange={(e, v) => { setYear(v.value) }}
                    />
                    <Form.Select
                        name='detailModel'
                        value={detail}
                        options={detailsOption}
                        label='รายละเอียดรุ่น'
                        fluid
                        disabled={!year}
                        onChange={(e, v) => { setDetail(v.value) }}
                    />

                </Form.Group>
                <br />
                <Form.Group widths='6'>
                    <Form.Field>
                        <b>เลือกชนิดประกัน</b>
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
                            value='2+'
                            checked={value === '2+'}
                            onChange={() => setValue('2+')}
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
                            value='3+'
                            checked={value === '3+'}
                            onChange={() => setValue('3+')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Button color='teal' onClick={() => { handleClickShowRatePrice() }}>สำรวจราคา</Button>
                    </Form.Field>
                </Form.Group>
            </Form>
            <TransitionablePortal
                open={!notError}
                transition={{ animation:'fly down', duration: 400}}
                onClose={() => setNotError(true)}
            >
                <Message
                    error
                    header
                    size='large'
                    style={{ left: '30vw', right:'30vw', position: 'fixed', top: '15vh',
                        textAlign: 'center', boxShadow: '0px 5px 10px #b3b3b3'}}
                >
                    <Icon name='warning' />
                    กรุณากรอกข้อมูลให้ครบถ้วน
                </Message>
            </TransitionablePortal>
        </div>
    )
}

