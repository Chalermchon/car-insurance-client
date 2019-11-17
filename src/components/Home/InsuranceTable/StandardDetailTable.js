import React from 'react'
import { Menu, Segment, Grid, Table, Header, Icon } from 'semantic-ui-react'

import HeadSection from '../TypeDescriprion/HeadSection'
import FirstSection from '../TypeDescriprion/FirstSection'
import SecondSection from '../TypeDescriprion/SecondSection'
import ThirdSection from '../TypeDescriprion/ThirdSection'

export default function StandardDetailTable() {
    return (
        <div>
            <Segment>
                <HeadSection name="---------------"/>
                <br />
                <hr />
                <h3>ตารางความคุ้มครองประกันภัยรถยนต์</h3>

                <Table basic='very' celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ความคุ้มครอง</Table.HeaderCell>
                            <Table.HeaderCell textAlign='right'>จำนวนเงินจำกัดความรับผิด</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <FirstSection one="500,000" two="10,000,000" three="1,000,000"/>
                        <SecondSection/>
                        <ThirdSection/>
                    </Table.Body>
                </Table>
            </Segment>
        </div>
    )
}
