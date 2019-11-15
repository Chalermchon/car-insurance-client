import React, { useState } from 'react'
// import Link from 'next/link'

import { Card, Icon, Table, Header, Responsive, Button } from 'semantic-ui-react'

const goToAdvanceFromPage = (e) => {
    window.location = '/advance-car-form'
}
const gotoInsuranceDetail = (e) => {
    window.location = '/'
}

const aCard = (type, fund, fundFlood, firstDamageRate, pleace, socondDamageRate, price) =>
    <Card>
        <Card.Content>
            <Card.Header textAlign='center'> 
                <h1>
                    {type} 
                </h1>
            </Card.Header>
            <Card.Description textAlign='center'>
                <Table basic='very' celled>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Header.Subheader>ทุนประกัน</Header.Subheader>
                            </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='right'>{fund} บาท</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Header.Subheader>คุ้มครองเสียหายน้ำท่วม</Header.Subheader>
                            </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='right'>{fundFlood} บาท</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Header.Subheader>ค่าเสียหายส่วนแรก</Header.Subheader>
                            </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='right'>{firstDamageRate} บาท</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Header.Subheader>ซ่อม</Header.Subheader>
                            </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='right'>{pleace}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                            <Header as='h4' image>
                                <Header.Subheader>ทรัพย์สินบุคคลภายนอก</Header.Subheader>
                            </Header>
                            </Table.Cell>
                            <Table.Cell textAlign='right'>{socondDamageRate} บาท</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Card.Description>
        </Card.Content>
        <Card.Content extra textAlign='center'>
            <h2>
                <Icon name='dollar sign' />
                ราคา {price} บาท                        
            </h2>
        </Card.Content>
        <Card.Content extra textAlign='center'>
            <Button.Group attached='bottom'>
                <Button  icon size='large'  color='yellow' onClick={gotoInsuranceDetail}> 
                    รายละเอียด
                </Button>      
                <Button  icon size='large'  color='teal' onClick={goToAdvanceFromPage}> 
                    ซื้อประกันนี้
                </Button>                 
            </Button.Group>
        </Card.Content>
    </Card>



export default (props) => {
    return(
        <div>
             <Responsive {...Responsive.onlyMobile}>
                <Card.Group itemsPerRow={1}>
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                </Card.Group>
             </Responsive>
             <Responsive {...Responsive.onlyTablet}>
                <Card.Group itemsPerRow={2}>
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                </Card.Group>
             </Responsive>
             <Responsive {...Responsive.onlyComputer}>
                <Card.Group itemsPerRow={3}>
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                    {aCard("2 plus minimal", "100,000", "100,000", "0", "อู่", "1,000,000", "7,900")}
                </Card.Group>
             </Responsive>

        </div>
    )
}
