import React from 'react'
import { Table } from 'semantic-ui-react'


export default function TwoPlusMaxAuuRatePriceTable() {
    return (
        <Table basic='very' celled>
        <Table.Body>
            <Table.Row>
                <Table.Cell width={7} style={{color: "#EC7063"}}>ทุนประกัน (บาท)</Table.Cell>
                <Table.Cell textAlign="center">150,000</Table.Cell>
                <Table.Cell textAlign="center">200,000</Table.Cell>
                <Table.Cell textAlign="center">300,000</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell width={7}>ภัยธรรมชาติ (น้ำท่วม, แผ่นดินไหว)</Table.Cell>
                <Table.Cell textAlign="center">100,000</Table.Cell>
                <Table.Cell textAlign="center">200,000</Table.Cell>
                <Table.Cell textAlign="center">200,000</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell width={7}><div style={{color: "#EC7063"}}>รถกลุ่ม 3, 4, 5</div><br/><br/>รถเก๋ง<br/><br/>รถปิคอัพ<br/><br/>รถตู้</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>7,900<br/><br/>7,900<br/><br/>9,700</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>8,500<br/><br/>8,500<br/><br/>10,300</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>9,500<br/><br/>9,500<br/><br/>11,300</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell width={7}><div style={{color: "#EC7063"}}>รถกลุ่ม 3, 4, 5</div><br/><br/>รถเก๋ง<br/><br/>รถปิคอัพ<br/><br/>รถตู้</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>8,900<br/><br/>9,500<br/><br/>10,500</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>8,900<br/><br/>9,500<br/><br/>10,500</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>10,700<br/><br/>11,300<br/><br/>12,300</Table.Cell>
            </Table.Row>

        </Table.Body>
    </Table>
    )
}
