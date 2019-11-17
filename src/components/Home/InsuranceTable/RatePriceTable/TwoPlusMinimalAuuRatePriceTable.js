import React from 'react'
import { Table } from 'semantic-ui-react'


export default function TwoPlusMinimalAuuRatePriceTable() {
    return (
        <Table  celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell rowSpan='2' textAlign='center'></Table.HeaderCell>
                    {/* <Table.HeaderCell colSpan='2' textAlign='center'>ราคา (บาท)</Table.HeaderCell> */}
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell textAlign='center'>รถกลุ่ม 3 - 5</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>รถกลุ่ม 1 - 2</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell width={9}>รถเก๋ง</Table.Cell>
                    <Table.Cell textAlign="center">6,900</Table.Cell>
                    <Table.Cell textAlign="center">7,900</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>รถปิคอัพ</Table.Cell>
                    <Table.Cell textAlign="center">6,900</Table.Cell>
                    <Table.Cell textAlign="center">7,900</Table.Cell>
                </Table.Row>

            </Table.Body>
        </Table>
    )
}
