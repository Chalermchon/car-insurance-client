
import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "../../axios";

import { Card, Icon, Table, Responsive, Button } from 'semantic-ui-react'

import { setInsuranceTypeId, setInsuranceTypeName, setCarSeryId } from '../../redux/action';
import { getRatePricesAndCarSeryId } from '../../axios/RatePrice';
import SubCardOfinsurance from './SubOfCardOfinsurance';

export default () => {
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    const history = useHistory();
    const dispatch = useDispatch();

    const insuranceGroup = useSelector(state => state.insuranceGroup);
    const prevInsuranceGroup = usePrevious(insuranceGroup);
    const carInformation = useSelector(state => state.carInformation);
    const prevCarInformation = usePrevious(carInformation);

    const [ratePrices, setRatePrices] = useState([]);
    const [tmpCarSeryId, setTmpCarSeryId] = useState(0);


    useEffect(() => {
        if (prevInsuranceGroup !== insuranceGroup || prevCarInformation !== carInformation) {
            let brand = carInformation.brand
            let model = carInformation.model
            let year = carInformation.year
            let detail = carInformation.detail
            axios.get(`/api/rate-prices/${brand}/${model}/${year}/${detail}`).then(res => {
                let ratePrices = res.data.data.filter(value => {
                    return value.group === insuranceGroup;
                })
                console.log(ratePrices);
                
                setRatePrices(ratePrices)
                setTmpCarSeryId(res.data.carSeryId)
            });
        }
    }, [prevInsuranceGroup, insuranceGroup, prevCarInformation, carInformation])

    const handleSellInsurance = (insuranceTypeId, insuranceTypeName) => {
        dispatch(setInsuranceTypeId(insuranceTypeId))
        dispatch(setInsuranceTypeName('ประเภท ' + insuranceTypeName))
        dispatch(setCarSeryId(tmpCarSeryId))
        history.push("/advance-car-form");
    }

    const getRatePriceCards = () => {
        if (ratePrices.length) {
            return (ratePrices.map(ratePrice => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header textAlign='center'>
                                <h1>{ratePrice.name}</h1>
                            </Card.Header>
                            <Card.Description textAlign='center'>
                                <Table basic='very' celled>
                                    <Table.Body>
                                        <SubCardOfinsurance 
                                            optionKeys={ ratePrice.option !== null ? Object.keys(ratePrice.option) : []}
                                            option={ratePrice.option}
                                        />
                                    </Table.Body>
                                </Table>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign='center'>
                            <h2>
                                <Icon name='dollar sign' />
                                ราคา {ratePrice.price} บาท
                            </h2>
                        </Card.Content>
                        <Card.Content extra textAlign='center'>
                            <Button.Group attached='bottom'>
                                {/* <Button icon size='large' color='olive' onClick={gotoInsuranceDetail}>
                                    รายละเอียด
                                </Button> */}
                                <Button icon size='large' color='teal' onClick={() => handleSellInsurance(ratePrice.id, ratePrice.name)}>
                                    ซื้อประกันนี้
                                </Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                );
            }));
        }
    }

    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <Card.Group itemsPerRow={1}>
                    {getRatePriceCards()}
                </Card.Group>
            </Responsive>
            <Responsive {...Responsive.onlyTablet}>
                <Card.Group itemsPerRow={2} >
                    {getRatePriceCards()}
                </Card.Group>
            </Responsive>
            <Responsive {...Responsive.onlyComputer}>
                <Card.Group itemsPerRow={3}>
                    {getRatePriceCards()}
                </Card.Group>
            </Responsive>
        </div>
    )
}