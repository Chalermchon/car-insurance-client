import React, { useState, useEffect } from 'react'
import { Header, Segment, Message, Table, Divider, Icon } from 'semantic-ui-react'

import HeadSection from '../TypeDescriprion/HeadSection'
import FirstSection from '../TypeDescriprion/FirstSection'
import SecondSection from '../TypeDescriprion/SecondSection'
import ThirdSection from '../TypeDescriprion/ThirdSection'

import TwoPlusMinimalAuuRatePriceTable from '../InsuranceTable/RatePriceTable/TwoPlusMinimalAuuRatePriceTable'
import TwoPlus35UpRatePriceTable from '../InsuranceTable/RatePriceTable/TwoPlus35UpRatePriceTable'
import TwoPlusMaxAuuRatePriceTable from '../InsuranceTable/RatePriceTable/TwoPlusMaxAuuRatePriceTable'
import TwoPlusMaxHangRatePriceTable from '../InsuranceTable/RatePriceTable/TwoPlusMaxHangRatePriceTable'

export default function TypeTwoPlusTable(props) {
    const [currentKind, setCurrentKind] = useState(props.kind)

    useEffect(() => {
        if (props.kind == '2+ Minimal (ซ่อมอู่)') setCurrentKind(props.kind)
        if (props.kind != '2+ Minimal (ซ่อมอู่)') setCurrentKind(props.kind)
    })

    let segment
    if (currentKind == "2+ Minimal (ซ่อมอู่)") {
        const best3Option = [
            'คุ้มครองกรณีชนกับยานพาหนะทางบกเท่านั้น',
            '(1) สำหรับรถเก๋ง (110) และรถปิคอัพขนาดไม่เกิน 3 ตัน (320) เท่านั้น (2) คุ้มครองความเสียหายต่อรถยนต์ที่เอาประกันภัย เฉพาะกรณีที่เฉี่ยวชนกับยานพาหนะทางบกเท่านั้น (3) มูลค่ารถยนต์ขณะที่เอาประกันภัยต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก (4) ไม่รับประกันรถที่ติดตั้งโครง-หลังคาเหล็ก โหลดเตี้ยรถแข่ง หรือรถดัดแปลงสภาพทุกชนิด (5) คุ้มครองอุปกรณ์เครื่องตกแต่งตามมาตรฐานของโรงงานเท่านั้น(6) รถกลุ่ม 1, 2 เช่น MERCEDES-BENZ, BMW, VOLVO, AUDI และอื่นๆ'
        ]
        segment =
            <Segment>
                <HeadSection name="2+ Minimal" title="ประกันภัยที่ซ่อมรถคุณ รวมรถหาย ไฟไหม้" items={['ไม่มีค่าเสียหายส่วนแรก', 'ไม่จำกัดอายุรถ']} price="เริ่มต้น 6,900 " />

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
                        <SecondSection one=" 100,000 บาท / คน" oneOption="  " onePointOne=" - " two=" 100,000 บาท" />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000" two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='dollar sign' />price rate</Header>
                </Divider>

                <TwoPlusMinimalAuuRatePriceTable />

                <Message header='หมายเหตุ' list={best3Option} />
            </Segment>
    }
    if (currentKind == "2+ 35 UP") {
        const best3Option = [
            'ค่าเสียหายส่วนแรก 2,000 บาทกรณีเป็นฝ่ายผิด และผู้ขับขี่มีอายุต่ำกว่า 35 ปี', 'คุ้มครองกรณีชนกับยานพาหนะทางบกเท่านั้น',
            '(1) สำหรับรถเก๋ง (110) และรถปิคอัพขนาดไม่เกิน 3 ตัน (320) เท่านั้น (2) คุ้มครองความเสียหายต่อรถยนต์ที่เอาประกันภัย เฉพาะกรณีที่เฉี่ยวชนกับยานพาหนะทางบกเท่านั้น (3) มูลค่ารถยนต์ขณะที่เอาประกันภัยต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก (4) ไม่รับประกันรถที่ติดตั้งโครง-หลังคาเหล็ก โหลดเตี้ยรถแข่ง หรือรถดัดแปลงสภาพทุกชนิด (5) คุ้มครองอุปกรณ์เครื่องตกแต่งตามมาตรฐานของโรงงานเท่านั้น (6) รถกลุ่ม 1, 2 เช่น MERCEDES-BENZ, BMW, VOLVO, AUDI และอื่นๆ (7) 2 พลัส 35 UP ผู้ขับขี่ที่มีอายุต่ำกว่า 35 ปีบริบูรณ์ ณ วันที่เกิดเหตุต้องรับผิดชอบค่าเสียหายส่วนแรก 2,000 บาท ในกรณีที่เป็นฝ่ายผิด'
        ]
        segment =
            <Segment>
                <HeadSection name="Asia 2+ 35 UP" title="ประกันภัยที่ซ่อมรถคุณ รวมรถหาย ไฟไหม้" items={['ไม่มีค่าเสียหายส่วนแรก', 'ไม่จำกัดอายุรถ']} price="เริ่มต้น 5,900 " />

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
                        <SecondSection one=" ไม่เกินทุนประกัน " oneOption="  " onePointOne=" 2,000 บาท * " two=" ไม่เกินทุนประกัน " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000 " two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='dollar sign' />price rate</Header>
                </Divider>

                {/* <ThreePlusRatePriceTable /> */}
                <TwoPlus35UpRatePriceTable />

                <Message header='หมายเหตุ' list={best3Option} />
            </Segment>
    }
    if (currentKind == "2+ MAX (ซ่อมอู่)") {
        const best3Option = [
            '(1) สำหรับรถญี่ปุ่นและอื่น ๆ (รถกลุ่ม 3-5) เช่น Honda Accord, Toyota Altis, Nissan March, Toyota Commuter เป็นต้น (2) สำหรับรถยุโรป (กลุ่ม 1-2) เช่น Mercedes Benz, BMW, VOLVO, AUDI เป็นต้น (3) รถยนต์นั่งใช้ส่วนบุคคล (รหัส 110), รถกระบะปิคอัพไม่เกิน 3 ตัน (รหัส 320), รถตู้โดยสารส่วนบุคคล (รหัส 210) (4) เบี้ยประกันภัยข้างต้นยังไม่รวมเบี้ยประกันภัย พรบ. (ภาคบังคับ) : เก๋ง = 645.21 บาท, กระบะปิคอัพ = 967.28 บาท, ตู้โดยสารส่วนบุคคล = 1,182.35 บาท (5) ไม่จำกัดอายุรถยนต์กรณีซ่อมอู่ทั่วไป (ขอสงวนสิทธิ์เฉพาะรถยนต์ที่บริษัทกำหนด) และไม่เกิน 5 ปี กรณีซ่อมห้าง / ไม่ต้องตรวจสภาพรถก่อนทำประกันภัย (6) มูลค่ารถขณะที่เอาประกันภัย ต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก และคุ้มครองอุปกรณ์เครื่องตกแต่ง ตามมาตรฐานของโรงงานเท่านั้น (7) เบี้ยประกันภัยข้างต้นได้คำนวณรวมส่วนลดกล้องโทรทัศน์วงจรปิด (CCTV) ไว้แล้ว และมีผลบังคับจนกว่าจะมีการแจ้งเปลี่ยนแปลง'
        ]
        const best3Option1 = [
            '(1) รถยนต์รับจ้างหรือให้เช่า,รถยนต์ที่ใช้เพื่อการพาณิชย์ มูลนิธิ รถร่วม รถกู้ชีพ รถอาสากู้ภัย รถติดไซเรน ฯลฯ (2) ไม่รับประกันรถบรรทุกเชื้อเพลิง กรด แก๊ส หรือรถบรรทุกวัตถุอันตราย, รถยนต์ที่มีการตกแต่งเพิ่มเติม หรือดัดแปลงสภาพจากเดิม เช่น รถโหลดเตี้ยหรือยกสูง, รถปรับแต่งเครื่องยนต์ (3) ติดเคฟลาร์ (Cafla), สติ๊กเกอร์ตกแต่งทุกชนิด และหรือ รถกระบะที่มีการติดตั้งอุปกรณ์เสริมพิเศษต่าง ๆ เช่น ติดตั้งตู้เหล็กพร้อมเครื่องทำความเย็น, เครน, ตะแกรงเหล็ก, เฮี๊ยบ, โครงเหล็กหรือหลังคา หรืออุปกรณ์ใด ๆ เช่น ติดตั้งตู้เหล็กพร้อมเครื่องทำความเย็น, เครน, ตะแกรงเหล็ก, เฮี๊ยบ, โครงเหล็กหรือหลังคา หรืออุปกรณ์ใด ๆ'
        ]
        segment =
            <Segment>
                <HeadSection name="2+ MAX (ซ่อมอู่)" title="ประกันภัยที่ซ่อมรถคุณ รวมรถหาย ไฟไหม้" items={['ไม่มีค่าเสียหายส่วนแรก', 'ไม่จำกัดอายุรถ', 'คุ้มครองภัยธรรมชาติ']} price="เริ่มต้น 7,900 " />

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
                        <SecondSection one=" ไม่เกินทุนประกัน " oneOption="  " onePointOne=" - " two=" ไม่เกินทุนประกัน " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000 " two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4 / รถตู้ 4" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='dollar sign' />price rate</Header>
                </Divider>

                {/* <TwoPlus35UpRatePriceTable /> */}
                <TwoPlusMaxAuuRatePriceTable />

                <Message header='เงื่อนไขการรับประกันภัย' list={best3Option} />
                <Message header='รถยนต์ที่บริษัทฯ สงวนสิทธิ์ ไม่รับประกันภัย' list={best3Option1} />
            </Segment>
    }
    if (currentKind == "2+ MAX (ซ่อมห้าง)") {
        const best3Option = [
            '(1) สำหรับรถญี่ปุ่นและอื่น ๆ (รถกลุ่ม 3-5) เช่น Honda Accord, Toyota Altis, Nissan March, Toyota Commuter เป็นต้น (2) สำหรับรถยุโรป (กลุ่ม 1-2) เช่น Mercedes Benz, BMW, VOLVO, AUDI เป็นต้น (3) รถยนต์นั่งใช้ส่วนบุคคล (รหัส 110), รถกระบะปิคอัพไม่เกิน 3 ตัน (รหัส 320), รถตู้โดยสารส่วนบุคคล (รหัส 210) (4) เบี้ยประกันภัยข้างต้นยังไม่รวมเบี้ยประกันภัย พรบ. (ภาคบังคับ) : เก๋ง = 645.21 บาท, กระบะปิคอัพ = 967.28 บาท, ตู้โดยสารส่วนบุคคล = 1,182.35 บาท (5) ไม่จำกัดอายุรถยนต์กรณีซ่อมอู่ทั่วไป (ขอสงวนสิทธิ์เฉพาะรถยนต์ที่บริษัทกำหนด) และไม่เกิน 5 ปี กรณีซ่อมห้าง / ไม่ต้องตรวจสภาพรถก่อนทำประกันภัย (6) มูลค่ารถขณะที่เอาประกันภัย ต้องไม่ต่ำกว่าจำนวนเงินเอาประกันภัยตามแผนประกันภัยที่เลือก และคุ้มครองอุปกรณ์เครื่องตกแต่ง ตามมาตรฐานของโรงงานเท่านั้น (7) เบี้ยประกันภัยข้างต้นได้คำนวณรวมส่วนลดกล้องโทรทัศน์วงจรปิด (CCTV) ไว้แล้ว และมีผลบังคับจนกว่าจะมีการแจ้งเปลี่ยนแปลง'
        ]
        const best3Option1 = [
            '(1) รถยนต์รับจ้างหรือให้เช่า,รถยนต์ที่ใช้เพื่อการพาณิชย์ มูลนิธิ รถร่วม รถกู้ชีพ รถอาสากู้ภัย รถติดไซเรน ฯลฯ (2) ไม่รับประกันรถบรรทุกเชื้อเพลิง กรด แก๊ส หรือรถบรรทุกวัตถุอันตราย, รถยนต์ที่มีการตกแต่งเพิ่มเติม หรือดัดแปลงสภาพจากเดิม เช่น รถโหลดเตี้ยหรือยกสูง, รถปรับแต่งเครื่องยนต์ (3) ติดเคฟลาร์ (Cafla), สติ๊กเกอร์ตกแต่งทุกชนิด และหรือ รถกระบะที่มีการติดตั้งอุปกรณ์เสริมพิเศษต่าง ๆ เช่น ติดตั้งตู้เหล็กพร้อมเครื่องทำความเย็น, เครน, ตะแกรงเหล็ก, เฮี๊ยบ, โครงเหล็กหรือหลังคา หรืออุปกรณ์ใด ๆ เช่น ติดตั้งตู้เหล็กพร้อมเครื่องทำความเย็น, เครน, ตะแกรงเหล็ก, เฮี๊ยบ, โครงเหล็กหรือหลังคา หรืออุปกรณ์ใด ๆ'
        ]
        segment =
            <Segment>
                <HeadSection name="2+ MAX (ซ่อมห้าง)" title="ประกันภัยที่ซ่อมรถคุณ รวมรถหาย ไฟไหม้" items={['ไม่มีค่าเสียหายส่วนแรก', 'ไม่จำกัดอายุรถ', 'คุ้มครองภัยธรรมชาติ']} price="เริ่มต้น 10,000 " />

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
                        <SecondSection one=" ไม่เกินทุนประกัน " oneOption="  " onePointOne=" - " two=" ไม่เกินทุนประกัน " />
                        <ThirdSection onePointOne="ผู้ขับขี่และผู้โดยสารในรถประกัน 100,000 " two="100,000" three="300,000" four="เก๋ง 7 / ปิคอัพ 4 / รถตู้ 4" />
                    </Table.Body>
                </Table>

                <Divider horizontal>
                    <Header as='h4'><Icon name='dollar sign' />price rate</Header>
                </Divider>

                <TwoPlusMaxHangRatePriceTable/>

                <Message header='เงื่อนไขการรับประกันภัย' list={best3Option} />
                <Message header='รถยนต์ที่บริษัทฯ สงวนสิทธิ์ ไม่รับประกันภัย' list={best3Option1} />
            </Segment>

    }

    return (
        <div>
            {segment}
        </div>
    )
}
