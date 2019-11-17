import React from 'react'
import { Table, Header } from 'semantic-ui-react'

export default function ThirdSection(props) {
    return (
        <Table.Row>
            <Table.Cell>
                <Header as='h4' image>
                    <Header.Subheader><b>ความคุ้มครองตามเอกสารแนบท้าย</b></Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>1. อุบัติเหตุส่วนบุคคล</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>1.1 เสียชีวิต สูญเสียอวัยวะ ทุพพลภาพถาวร</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>2. ค่ารักษาพยาบาล</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>3. การประกันตัวผู้ขับขี่</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>จำนวนที่นั่ง</Header.Subheader>
                </Header>
            </Table.Cell>

            <Table.Cell textAlign='right'>
                <Header as='h4' image>
                    <Header.Subheader><br/><br/><br/><br/></Header.Subheader>
                    <Header.Subheader>{props.onePointOne} <b> บาท / คน</b></Header.Subheader>
                    <Header.Subheader><br/></Header.Subheader>
                    <Header.Subheader>{props.two}<b> บาท / คน</b></Header.Subheader>
                    <Header.Subheader><br/></Header.Subheader>
                    <Header.Subheader>{props.three} <b> บาท / ครั้ง</b></Header.Subheader>
                    <Header.Subheader><br/></Header.Subheader>
                    <Header.Subheader>{props.four}</Header.Subheader>
                </Header>
            </Table.Cell>
        </Table.Row>
    )
}
