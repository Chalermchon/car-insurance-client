import React from 'react'
import { Table } from 'semantic-ui-react'


export default function ThreeBastRatePriceTable() {
    return (
        <Table basic='very' celled>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>รถเก๋ง</Table.Cell>
                    <Table.Cell textAlign="right">2,250</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>รถปิคอัพ</Table.Cell>
                    <Table.Cell textAlign="right">3,000</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>รถตู้ส่วนบุคคล</Table.Cell>
                    <Table.Cell textAlign="right">3,250</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
