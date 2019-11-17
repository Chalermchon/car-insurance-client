import React from 'react'
import { Table, Icon } from 'semantic-ui-react'


export default function ThreePlusRatePriceTable() {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell rowSpan='2' textAlign='center'></Table.HeaderCell>
                    <Table.HeaderCell colSpan='2' textAlign='center'>ราคา (บาท)</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell textAlign='center'>มีค่าเสียหายส่วนแรก</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>ไม่มีค่าเสียหายส่วนแรก</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell textAlign='left'>รถกลุ่ม 3, 4, 5</Table.Cell>
                    <Table.Cell textAlign='center'>6,800</Table.Cell>
                    <Table.Cell textAlign='center'>7,500</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='left'>รถกลุ่ม 1, 2</Table.Cell>
                    <Table.Cell textAlign='center'>7,800</Table.Cell>
                    <Table.Cell textAlign='center'>8,500</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell textAlign='left'>ค่าเสียหายส่วนแรก</Table.Cell>
                    <Table.Cell textAlign='center'>3,000</Table.Cell>
                    <Table.Cell textAlign='center'>-</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
