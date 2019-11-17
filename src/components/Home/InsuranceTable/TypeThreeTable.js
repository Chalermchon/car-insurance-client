import React, { useState, useEffect } from 'react'
import { Header, Segment, Message, Table, Divider, Icon } from 'semantic-ui-react'

import HeadSection from '../TypeDescriprion/HeadSection'
import FirstSection from '../TypeDescriprion/FirstSection'
import SecondSection from '../TypeDescriprion/SecondSection'
import ThirdSection from '../TypeDescriprion/ThirdSection'
import ThreeBastRatePriceTable from '../InsuranceTable/RatePriceTable/ThreeBastRatePriceTable'

export default function TypeThreeTable(props) {
    const [currentKind, setCurrentKind] = useState(props.kind)

    useEffect(() => {
        if (props.kind == '3 BEST') setCurrentKind(props.kind)
        if (props.kind != '3 BEST') setCurrentKind(props.kind)
    })

    let segment
    if (currentKind == "3 BEST") {
        const best3Option = [
            '(1) สำหรับรถเก๋ง (110), รถปิคอัพขนาดไม่เกิน 3 ตัน (320) และรถตู้ส่วนบุคคล (210) เท่านั้น (2) ไม่จำกัดอายุรถ (3) เบี้ยประกันภัยข้างต้นยังไม่รวมเบี้ยประกันภัย พรบ.(ภาคบังคับ) เก๋ง = 645.21 บาท, ตู้ = 1,182.35, กระบะปิคอัพ = 967.28 บาท (4) เบี้ยประกันภัยด้านต้นได้คำนวณรวมส่วนลดกล้อง (CCTV) ไว้แล้ว',
        ]
        segment =
            <Segment>
                <HeadSection name="Asia 3 BEST" title="ประกันภัยชั้น 3 ราคาประหยัด คุ้มครอง คุ้มค่า คุ้มสุดๆ" items={['เลือกความคุ้มครองและเบี้ยประกันภัยได้ตามความต้องการ', 'บริการให้คำปรึกษาเรียกร้องค่าเสียหาย (เมื่อเป็นฝ่ายถูก)']} price="เริ่มต้น 2,250 " />

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
                        <FirstSection one="500,000" oneOption="10,000,000" two="1,000,000" />
                        <SecondSection one=" - " oneOption="  " onePointOne=" - " two=" - " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000" two="50,000" three="200,000" four="เก๋ง 5 / ปิคอัพ 5 / รถตู้ 7" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='dollar sign' />price rate</Header>
                </Divider>

                {/* <ThreePlusRatePriceTable /> */}
                <ThreeBastRatePriceTable/>
                <Message header='หมายเหตุ' list={best3Option} />
            </Segment>
    }
    if (currentKind == "3 กันชน") {
        const best3Option = [
            'คุ้มครองกรณีชนกับยานพาหนะทางบกเท่านั้น','คุ้มครองกรณีเป็นฝ่ายถูกและคู่กรณีไม่มีประกันภัย',
            '(1) สำหรับรถเก๋ง (110), รถปิคอัพขนาดไม่เกิน 3 ตัน (320) และรถตู้ส่วนบุคคล (210) เท่านั้น (2) คุ้มครองความเสียหายต่อรถยนต์ที่เอาประกันภัย เฉพาะกรณีที่เฉี่ยวชนกับยานพาหนะทางบกเท่านั้น (3) มูลค่ารถยนต์ขณะที่เอาประกันภัย ต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก (4) ไม่รับประกันรถที่ติดตั้งโครง-หลังคาเหล็ก โหลดเตี้ย รถแข่งหรือรถดัดแปลงสภาพทุกชนิด (5) คุ้มครองอุปกรณ์เครื่องตกแต่งตามมาตรฐานของโรงงานเท่านั้น'
        ]
        segment =
            <Segment>
                <HeadSection name="Asia 3 กันชน" title="คุ้มครองรถคุณ เมื่อถูกรถคู่กรณีไม่มีประกันภัยเฉี่ยวชน" items={['ไม่มีค่าเสียหายส่วนแรก', 'ไม่จำกัดอายุรถ']} price="ราคาเดียว 3,333 " />

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
                        <FirstSection one="500,000" oneOption="10,000,000" two="1,000,000" />
                        <SecondSection one=" 100,000 บาท / คน" oneOption="  " onePointOne=" - " two=" - " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000 " two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4 / รถตู้ 4" />
                    </Table.Body>
                </Table>

                {/* <Divider horizontal>
                    <Header as='h4'><Icon name='dollar sign' />price rate</Header>
                </Divider> */}

                {/* <ThreePlusRatePriceTable /> */}

                <Message header='หมายเหตุ' list={best3Option} />
            </Segment>
    }





    return (
        <div>
            {segment}
        </div>
    )
}
