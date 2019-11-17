import React from 'react'
import { Table } from 'semantic-ui-react'


export default function TwoPlus35UpRatePriceTable() {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell rowSpan='2' textAlign='center'></Table.HeaderCell>
                    <Table.HeaderCell colSpan='2' textAlign='center'>ทุนประกัน (บาท)</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell textAlign='center'>100,000 / ครั้ง</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>200,000 / ครั้ง</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell width={9}><div style={{ color: "#EC7063" }}>รถกลุ่ม 3, 4, 5</div><br /><br />รถเก๋ง<br /><br />รถปิคอัพ</Table.Cell>
                    <Table.Cell textAlign="center"><br /><br /><br />5,900<br /><br />6,499</Table.Cell>
                    <Table.Cell textAlign="center"><br /><br /><br />6,900<br /><br />7,499</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell width={9}><div style={{ color: "#EC7063" }}>รถกลุ่ม 3, 4, 5</div><br /><br />รถเก๋ง<br /><br />รถปิคอัพ</Table.Cell>
                    <Table.Cell textAlign="center"><br /><br /><br />5,900<br /><br />6,499</Table.Cell>
                    <Table.Cell textAlign="center"><br /><br /><br />-<br /><br />7,499</Table.Cell>
                </Table.Row>

            </Table.Body>
        </Table>
    )
}
