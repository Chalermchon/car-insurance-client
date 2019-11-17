import React from 'react'
import { Table } from 'semantic-ui-react'


export default function TwoPlusMaxHangRatePriceTable() {
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
                <Table.Cell textAlign="center"><br/><br/><br/>10,000<br/><br/>10,000<br/><br/>11,800</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>10,600<br/><br/>10,600<br/><br/>12,400</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>11,600<br/><br/>11,600<br/><br/>13,400</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell width={7}><div style={{color: "#EC7063"}}>รถกลุ่ม 3, 4, 5</div><br/><br/>รถเก๋ง<br/><br/>รถปิคอัพ<br/><br/>รถตู้</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>11,000<br/><br/>11,000<br/><br/>12,800</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>11,600<br/><br/>1,600<br/><br/>13,400</Table.Cell>
                <Table.Cell textAlign="center"><br/><br/><br/>12,600<br/><br/>12,600<br/><br/>14,400</Table.Cell>
            </Table.Row>

        </Table.Body>
    </Table>
    )
}
