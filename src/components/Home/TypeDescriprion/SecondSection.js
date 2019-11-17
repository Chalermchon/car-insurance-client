import React from 'react'
import { Table, Header } from 'semantic-ui-react'

export default function SecondSection(props) {
    return (
        <Table.Row>
            <Table.Cell>
                <Header as='h4' image>
                    <Header.Subheader><b>รถยนต์เสียหาย สูญหาย ไฟไหม้</b></Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>1. ความเสียหายต่อรถยนต์</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>1.1 ค่าเสียหายส่วนแรก</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>2. รถยนต์สูญหาย/ไฟไหม้</Header.Subheader>
                </Header>
            </Table.Cell>

            <Table.Cell textAlign='right'>
                <Header as='h4' image>
                    <Header.Subheader><br /><br /></Header.Subheader>
                    <Header.Subheader>{props.one} {props.oneOption}</Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>{props.onePointOne}<b></b></Header.Subheader>
                    <Header.Subheader><br /></Header.Subheader>
                    <Header.Subheader>{props.two}</Header.Subheader>
                </Header>
            </Table.Cell>
        </Table.Row>
    )
}
