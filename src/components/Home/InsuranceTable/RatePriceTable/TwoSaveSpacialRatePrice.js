import React from 'react'
import { Table } from 'semantic-ui-react'


export default function TwoSaveSpacialRatePrice() {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.Cell></Table.Cell>
                    <Table.Cell textAlign="right">ทุนประกัน (บาท)</Table.Cell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>รถเก๋ง</Table.Cell>
                    <Table.Cell textAlign="right">2,550</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>รถปิคอัพ</Table.Cell>
                    <Table.Cell textAlign="right">3,350</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
