import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
    Form, Checkbox, Button, Icon,
    Dimmer, Message, TransitionablePortal,
    Segment, Loader, Image, Select, Input
} from 'semantic-ui-react'

import { getBrands, getModels, getYears, getDetails } from "../../axios/CarSery";
import { setCarSery, setInsuranceGroup } from '../../redux/action';

export default () => {

    const carInformation = useSelector(state => state.carInformation);
    const insuranceGroup = useSelector(state => state.insuranceGroup);
    const oldCustomer = useSelector(state => state.oldCustomer);
    const dispatch = useDispatch();

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const brand = carInformation.brand;
    const prevBrand = usePrevious(brand);
    const model = carInformation.model;
    const prevModel = usePrevious(model);
    const year = carInformation.year;
    const prevYear = usePrevious(year);
    const detail = carInformation.detail;

    const [notError, setNotError] = useState(true)
    const [loading, setLoading] = useState(true)
    const timeout = useRef(false)

    const [brandsOption, setBrandsOption] = useState([]);
    const [modelsOption, setModelsOption] = useState([]);
    const [yearsOption, setYearsOption] = useState([]);
    const [detailsOption, setDetailsOption] = useState([]);

    useEffect(() => {
        if (
            (yearsOption.length && detailsOption.length) ||
            (modelsOption.length && yearsOption.length) ||
            (brandsOption.length && modelsOption.length) ||
            brandsOption.length
        ) {
            timeout.current = setInterval(() => {
                setLoading(false)
            }, 500);
        }
        if (!brandsOption.length) {
            setLoading(true)
            getBrands(setBrandsOption)
        }
        if (brand !== prevBrand && brand !== '') {
            setModelsOption([])
            setLoading(true)
            getModels(setModelsOption, brand)
        }
        if (model !== prevModel && model !== '') {
            setYearsOption([])
            setLoading(true)
            getYears(setYearsOption, model);
        }
        if (year !== prevYear && model !== '' && year !== '') {
            setDetailsOption([])
            setLoading(true)
            getDetails(setDetailsOption, { model, year })
        }
        return () => {
            clearInterval(timeout.current)
        }
    });

    return (
        <div>
            <Form className='cr-form-comp' size='large' >
                <Form.Group widths='2'>
                    <Form.Field
                        control={oldCustomer ? Input : Select}
                        readOnly={oldCustomer}
                        name='brand'
                        value={brand}
                        options={brandsOption}
                        label='ยี่ห้อ'
                        fluid
                        onChange={(e, v) => {
                            dispatch(setCarSery({
                                brand: v.value,
                                model: '',
                                year: '',
                                detail: ''
                            }));
                        }}
                    />

                    <Form.Field
                        control={oldCustomer ? Input : Select}
                        readOnly={oldCustomer}
                        name='model'
                        value={model}
                        options={modelsOption}
                        label='รุ่น'
                        fluid
                        disabled={!brand}
                        onChange={(e, v) => {
                            dispatch(setCarSery({
                                brand: brand,
                                model: v.value,
                                year: '',
                                detail: ''
                            }));
                        }}
                    />
                </Form.Group>
                <Form.Group widths='2'>
                    <Form.Field
                        control={oldCustomer ? Input : Select}
                        readOnly={oldCustomer}
                        name='yearOfMNF'
                        value={year}
                        options={yearsOption}
                        label='ปี่ที่ผลิต'
                        fluid
                        disabled={!model}
                        onChange={(e, v) => {
                            dispatch(setCarSery({
                                brand: brand,
                                model: model,
                                year: v.value,
                                detail: ''
                            }));
                        }}
                    />
                    <Form.Field
                        control={oldCustomer ? Input : Select}
                        readOnly={oldCustomer}
                        name='detailModel'
                        value={detail}
                        options={detailsOption}
                        label='รายละเอียดรุ่น'
                        fluid
                        disabled={!year}
                        onChange={(e, v) => {
                            dispatch(setCarSery({
                                brand: brand,
                                model: model,
                                year: year,
                                detail: v.value
                            }));
                        }}
                    />

                </Form.Group>
                <br />
                <Form.Group widths='5'>
                    <Form.Field>
                        <b>เลือกชนิดประกัน</b>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 2'
                            name='checkboxRadioGroup'
                            checked={insuranceGroup === '2'}
                            onChange={() => dispatch(setInsuranceGroup('2'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 2+'
                            name='checkboxRadioGroup'
                            checked={insuranceGroup === '2+'}
                            onChange={() => dispatch(setInsuranceGroup('2+'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 3'
                            name='checkboxRadioGroup'
                            checked={insuranceGroup === '3'}
                            onChange={() => dispatch(setInsuranceGroup('3'))}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox
                            radio
                            label='ประเภท 3+'
                            name='checkboxRadioGroup'
                            checked={insuranceGroup === '3+'}
                            onChange={() => dispatch(setInsuranceGroup('3+'))}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
            <TransitionablePortal
                open={!notError}
                transition={{ animation: 'fly down', duration: 400 }}
                onClose={() => setNotError(true)}
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
                    <Icon name='warning' />
                    กรุณากรอกข้อมูลให้ครบถ้วน
                </Message>
            </TransitionablePortal>
            <Dimmer active={loading} inverted page>
                <Loader>Loading</Loader>
            </Dimmer>
        </div>
    );
}

