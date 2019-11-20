import React, { useState } from 'react'
import { Form, Divider, Grid, Statistic } from 'semantic-ui-react'

export default () => {

    return (
        <div className="carInfoForm">
            <br />
            <Divider horizontal>address</Divider>
            <br />
            <Form>
                <Grid columns='three' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>222 / 96</Statistic.Value>
                            <Statistic.Label>บ้านเลขที่</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>บางใหญ่</Statistic.Value>
                            <Statistic.Label>แขวง / ตำบล</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>บางคูลัด</Statistic.Value>
                            <Statistic.Label>ถนน</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
                <Grid columns='three' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>บางใหญ่</Statistic.Value>
                            <Statistic.Label>เขต / อำเภอ</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>นนทบุรี</Statistic.Value>
                            <Statistic.Label>จังหวัด</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>11110</Statistic.Value>
                            <Statistic.Label>รหัสไปรษณีย์</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
            </Form>

        </div>
    )
}
