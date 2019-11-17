import React from 'react'
import {Table, Header} from 'semantic-ui-react'


export default function FirstSection(props) {
    return (
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Subheader><b>ความรับผิดต่อกลุ่มบุคคลภายนอก</b></Header.Subheader>
                        <Header.Subheader><br /></Header.Subheader>
                        <Header.Subheader>1. ความเสียหายต่อชีวิต ร่างกายหรืออนามัยเฉพาะส่วนที่เกินวงเงินสูงสุดตาม พรบ.</Header.Subheader>
                        <Header.Subheader><br /></Header.Subheader>
                        <Header.Subheader><br /></Header.Subheader>
                        <Header.Subheader>2. ความเสียหายต่อทรัพย์สิน</Header.Subheader>
                    </Header>
                </Table.Cell>

                <Table.Cell textAlign='right'>
                    <Header as='h4' image>
                        <Header.Subheader><br /><br /></Header.Subheader>
                        <Header.Subheader>{props.one} <b> บาท / คน</b></Header.Subheader>
                        <Header.Subheader>{props.oneOption}<b> บาท / ครั้ง</b></Header.Subheader>
                        <Header.Subheader><br /></Header.Subheader>
                        <Header.Subheader>{props.two} <b> บาท / ครั้ง</b></Header.Subheader>
                    </Header>
                </Table.Cell>
            </Table.Row>
    )
}
