import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Card, Icon, Table, Header, Responsive, Button } from 'semantic-ui-react'

import axios from "../../axios";
import { setInsuranceTypeId, setInsuranceTypeName } from '../../redux/action';

const getTableRows = (optionKeys, option) => {
    if (optionKeys !== null) {
        return optionKeys.map(optionKey => {
            if (option[optionKey] !== null) {
                return (
                    <Table.Row>
                        <Table.Cell>
                            <Header as='h4' image>
                                <Header.Subheader>{optionKey}</Header.Subheader>
                            </Header>
                        </Table.Cell>
                        <Table.Cell textAlign='right'>{option[optionKey]} บาท</Table.Cell>
                    </Table.Row>
                );
            }
        });
    }
}

export default (props) => {
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

    useEffect(() => {
        if (prevInsuranceGroup !== insuranceGroup || prevCarInformation !== carInformation) {
            let brand = carInformation.brand;
            let model = carInformation.model;
            let year = carInformation.year;
            let detail = carInformation.detail;
            axios.get(`/api/rate-prices/${brand}/${model}/${year}/${detail}`).then(res => {
                let ratePrices = res.data.data.filter(value => {
                    return value.group === insuranceGroup;
                })
                setRatePrices(ratePrices)
            });
        }
    })

    const handleSellInsurance = (insuranceTypeId, insuranceTypeName) => {
        dispatch(setInsuranceTypeId(insuranceTypeId))
        dispatch(setInsuranceTypeName(insuranceTypeName))
        history.push("/advance-car-form");
    }
    const gotoInsuranceDetail = (e) => {
        window.location = '/'
    }

    const getRatePriceCards = () => {
        if (ratePrices.length) {
            return ratePrices.map(ratePrice => {
                return (
                    <Card>
                        <Card.Content>
                            <Card.Header textAlign='center'>
                                <h1>{ratePrice.name}</h1>
                            </Card.Header>
                            <Card.Description textAlign='center'>
                                <Table basic='very' celled>
                                    <Table.Body>
                                        {getTableRows(ratePrice.option !== null ? Object.keys(ratePrice.option) : null, ratePrice.option)}
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
                                <Button icon size='large' color='olive' onClick={gotoInsuranceDetail}>
                                    รายละเอียด
                            </Button>
                                <Button icon size='large' color='teal' onClick={() => handleSellInsurance(ratePrice.id, ratePrice.name)}>
                                    ซื้อประกันนี้
                            </Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                );
            });
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
                <Card.Group itemsPerRow={2}>
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