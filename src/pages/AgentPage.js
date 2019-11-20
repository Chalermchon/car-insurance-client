import React from 'react'
import { Grid, Label, Card, Button, Modal, Header } from 'semantic-ui-react'


import FirstStepShowDetail from '../components/AgentPage/FirstStepShowDetail'
import SecondStepShowDetail from '../components/AgentPage/SecondStepShowDetail'
import ThirdStepShowDetail from '../components/AgentPage/ThirdStepShowDetail'
import FourStepShowDetail from '../components/AgentPage/FourStepShowDetail'
import FifthStepShowDetail from '../components/AgentPage/FifthStepShowDetail'

export default function AgentPage() {
    let recentCustomerCard =
        <Grid.Row>
            <Card color='green'>
                <Card.Content>
                    <Card.Header>
                        โจกี้ อิอิ
                    </Card.Header>
                    <br/>
                    <Card.Header style={{color:"gray"}}>
                        กด 2547
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui three buttons'>
                        <Modal trigger={<Button basic color='yellow'>ดูรายลเอียด</Button>}>
                            <Modal.Header>รายละเอียด</Modal.Header>
                            <Modal.Content image scrolling>
                                <Modal.Description>
                                    <FirstStepShowDetail />
                                    <SecondStepShowDetail />
                                    {/* <ThirdStepShowDetail /> */}
                                    <FourStepShowDetail />
                                    <FifthStepShowDetail />
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button primary>
                                    Proceed
                            </Button>
                            </Modal.Actions>
                        </Modal>
                        <Button basic color='red'>
                            ปฏิเสธ
                        </Button>
                        <Button basic color='green'>
                            ยืนยัน
                        </Button>


                    </div>
                </Card.Content>
            </Card>
        </Grid.Row>

    let recentCustomer =
        <div style={{ margin: "auto", display: "block", margin: "30px", textAlign: "center" }}>
            <Grid centered columns={1}>
                {recentCustomerCard}
                {recentCustomerCard}
                {recentCustomerCard}
            </Grid>
        </div>



    return (
        <div style={{ paddingRight: '5%', paddingLeft: '5%' }}>
            <Grid divided='vertically'>
                <Grid.Row columns={2} textAlign="center">
                    <Grid.Column>
                        {/* <Label color="olive" size="big"> */}
                            <h1>คำขอเอาประกันล่าสุด</h1>
                        {/* </Label> */}
                        {recentCustomer}
                    </Grid.Column>
                    <Grid.Column>
                        {/* <Label color="olive" size="big"> */}
                            <h1>ลุกค้าทั้งหมด</h1>
                        {/* </Label> */}
                        {/* {recentCustomer} */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
