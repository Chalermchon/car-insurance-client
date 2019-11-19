import React, { useState, useEffect } from 'react'
import { Header, Segment, Message, Table, Divider, Icon } from 'semantic-ui-react'

import HeadSection from '../TypeDescriprion/HeadSection'
import FirstSection from '../TypeDescriprion/FirstSection'
import SecondSection from '../TypeDescriprion/SecondSection'
import ThirdSection from '../TypeDescriprion/ThirdSection'
import TwoSaveSpacialRatePrice from '../InsuranceTable/RatePriceTable/TwoSaveSpacialRatePrice'

export default function TypeTwoTable(props) {
    const [currentKind, setCurrentKind] = useState(props.kind)

    useEffect(() => {
        if (props.kind == '2 save spacial') setCurrentKind(props.kind)
        if (props.kind != '2 save spacial') setCurrentKind(props.kind)
    })

    let segment
    if (currentKind == "2 save spacial") {
        const best3Option = [
            '(1) สำหรับรถเก๋ง (110) รถปิคอัพขนาดไม่เกิน 3 ตัน (320)และรถตู้ส่วนบุคคล (210) เท่านั้น (2) มูลค่ารถยนต์ขณะที่เอาประกันภัย ต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก (3) ไม่รับประกันรถที่ติดตั้งโครง-หลังคาเหล็ก โหลดเตี้ยรถแข่งหรือรถดัดแปลงสภาพทุกชนิด (4) คุ้มครองอุปกรณ์เครื่องตกแต่งตามมาตรฐานของโรงงานเท่านั้น (5) รถกลุ่ม 1, 2 เช่น MERCEDES-BENZ,BMW, VOLVO, AUDI และอื่นๆ'
        ]
        const best3Option1 = [
            'รถยนต์ที่รับจ้างหรือให้เช่า, รถยนต์ที่ไปใช้ร่วมกับมูลนิธิ เช่น รถมูลนิธิร่วมกตัญญู, รถกู้ชีพ, รถอาสากู้ภัย, รถติดไซเรน ฯลฯ',
            'รถยนต์บรรทุกเชื้อเพลิง กรด แก๊ส หรือรถบรรทุกวัตถุอันตราย, รถยนต์ที่มีการตกแต่งเพิ่มเติม หรือดัดแปลงจากสภาพเดิม',
            'จำกัดอายุรถ 1-15 ปี'
        ]

        segment =
            <Segment>
                <HeadSection name="2 save spacial" title="ประกันภัยชั้น 2 ราคาประหยัดคุ้มครอง คุ้มค่า" items={['เพิ่มความคุ้มครองพิเศษ รถหาย ไฟไไหม้', 'บริการให้คำปรึกษาเรียกร้องค่าเสียหาย (เมื่อเป็นฝ่ายถูก)']} price="เริ่มต้น 2,550 " />

                <Divider horizontal>
                    <Header as='h4'><Icon name='idea' />Protection table</Header>
                </Divider>

                <Table basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ความคุ้มครอง</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>จำนวนเงินจำกัดความรับผิด</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <FirstSection one="1,000,000" oneOption="10,000,000" two="2,000,000" />
                        <SecondSection one=" - " oneOption="  " onePointOne=" - " two=" 100,000 บาท / ครั้ง " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000" two="100,000" three="300,000" four="เก๋ง 5 / ปิคอัพ 5" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='money bill alternate outline' />price rate</Header>
                </Divider>

                <TwoSaveSpacialRatePrice/>

                <Message header='หมายเหตุ' list={best3Option}/>
                <Message header='รถยนต์ที่บริษัทฯ สงวนสิทธิ์ ไม่รับประกันภัย' list={best3Option1}/>

            </Segment>
    }
    if (currentKind == "2 Bumper") {
        const best3Option = [
            'คุ้มครองกรณีชนกับยานพาหนะทางบกเท่านั้น',
            'คุ้มครองกรณีเป็นฝ่ายถูกเท่านั้น',
            '(1) สำหรับรถเก๋ง (110) และรถปิคอัพขนาดไม่เกิน 3 ตัน (320) เท่านั้น (2) เบี้ยประกันภัยข้างต้นยังไม่รวมเบี้ยประกันภัย พรบ.(ภาคบังคับ) : เก๋ง = 645.21 บาท , กระบะปิคอัพ = 967.28 บาท (3) มูลค่ารถขณะที่เอาประกันภัยต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก (4) คุ้มครองความเสียหายต่อรถยนต์ที่เอาประกันภัยเฉพาะกรณีที่เฉี่ยวชนกับยานพหนะทางบกเท่านั้น'
        ]
        const best3Option1 = [
            'รถยนต์ที่รับจ้างหรือให้เช่า, รถยนต์ที่ไปใช้ร่วมกับมูลนิธิ เช่น รถมูลนิธิร่วมกตัญญู, รถกู้ชีพ, รถอาสากู้ภัย, รถติดไซเรน ฯลฯ',
            'รถยนต์บรรทุกเชื้อเพลิง กรด แก๊ส หรือรถบรรทุกวัตถุอันตราย, รถยนต์ที่มีการตกแต่งเพิ่มเติม หรือดัดแปลงจากสภาพเดิม'
        ]

        segment =
            <Segment>
                <HeadSection name="2 กันชน" title="ประกันชั้น 2 ที่คุ้มครองเหนือใคร คุ้มครองรถคุณเมื่อถูกคู่กรณีเฉี่ยวชน" items={[]} price="ราคาเดียว 3,599 " />

                <Divider horizontal>
                    <Header as='h4'><Icon name='idea' />Protection table</Header>
                </Divider>

                <Table basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ความคุ้มครอง</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>จำนวนเงินจำกัดความรับผิด</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <FirstSection one="700,000" oneOption="10,000,000" two="1,000,000" />
                        <SecondSection one=" 150,000 บาท / ครั้ง" oneOption="  " onePointOne=" - " two=" 150,000 บาท / ครั้ง" />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000 " two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4" />
                    </Table.Body>
                </Table>

                <Message header='หมายเหตุ' list={best3Option}/>
                <Message header='รถยนต์ที่บริษัทฯ สงวนสิทธิ์ ไม่รับประกันภัย' list={best3Option1}/>
            </Segment>
    }

    return (
        <div>
            {segment}
        </div>
    )
}
