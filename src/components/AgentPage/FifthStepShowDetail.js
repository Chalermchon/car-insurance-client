import React, { useState } from 'react'
import { Form, Segment, Divider, Grid, Statistic } from 'semantic-ui-react'

export default (props) => {

    return (
        <div className="carInfoForm">
            <br />
            <Divider horizontal>more car infomation</Divider>
            <br />
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>HONDA</Segment>
                <Segment textAlign='center' color='teal'>CIVIC</Segment>
                <Segment textAlign='center' color='teal'>2019</Segment>
                <Segment textAlign='center' color='teal'>1.5 SV 4Doors</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>กด 5676</Segment>
                <Segment textAlign='center' color='teal'>กรุุงเทพมหานคร</Segment>
            </Segment.Group>
            <Form>
                <Grid columns='two' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>1236548746468746546</Statistic.Value>
                            <Statistic.Label>หมายเลขตัวถัง</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{ color: "#4DB6AC" }}>45648468746846</Statistic.Value>
                            <Statistic.Label>หมายเลขเครื่อง</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
            </Form>
        </div>
    )
}
