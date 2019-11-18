import React from 'react'
import { Header, Segment, Message, Table, Divider, Icon } from 'semantic-ui-react'

import HeadSection from '../TypeDescriprion/HeadSection'
import FirstSection from '../TypeDescriprion/FirstSection'
import SecondSection from '../TypeDescriprion/SecondSection'
import ThirdSection from '../TypeDescriprion/ThirdSection'
import ThreePlusRatePriceTable from '../InsuranceTable/RatePriceTable/ThreePlusRatePriceTable'

export default function TypeThreePlueTable() {

    const list = [
        'คุ้มครองกรณีชนกับยานพาหนะทางบกเท่านั้น',
        '(1) สำหรับรถเก๋ง (110), รถปิคอัพขนาดไม่เกิน 3 ตัน (320) และรถตู้ส่วนบุคคล (210) เท่านั้น (2) คุ้มครองความเสียหายต่อรถยนต์ที่เอาประกันภัยเฉพาะกรณีที่เฉี่ยวชนกับยานพาหนะทางบกเท่านั้น (3) มูลค่ารถยนต์ขณะที่เอาประกันภัย ต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก (4) ไม่รับประกันรถที่ติดตั้งโครง-หลังคาเหล็ก โหลดเตี้ยรถแข่ง หรือ รถดัดแปลงสภาพทุกชนิด (5) คุ้มครองอุปกรณ์เครื่องตกแต่งตามมาตรฐานของโรงงานเท่านั้น (6) รถกลุ่ม 1, 2 เช่น MERCEDES-BENZ,BMW, VOLVO, AUDI และอื่นๆ (7)มีค่าเสียหายส่วนแรกกรณีเป็นฝ่ายผิด2,000 บาท',
      ]

    return (
        <div>
            <Segment>
                <HeadSection name="Asia 3 plus" title="ประกันภัยชั้น 3 ที่ซ่อมรถคุณ" items={['ไม่จำกัดอายุรถ']} price="เริ่มต้น 6,800 " />

                <Divider horizontal>
                    <Header as='h4'><Icon name='idea'/>Protection table</Header>
                </Divider>

                <Table basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ความคุ้มครอง</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>จำนวนเงินจำกัดความรับผิด</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <FirstSection one="500,000" oneOption="10,000,000" two="1,000,000" />
                        <SecondSection one="100,000 บาท / คน" oneOption=" * " onePointOne="ตามแพคเกจที่เลือก *" two=" - " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000" two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4 / รถตู้ 4" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='money bill alternate outline'/>price rate</Header>
                </Divider>

                <ThreePlusRatePriceTable/>

                <Message header='หมายเหตุ' list={list} />
            </Segment>

        </div>
    )
}
