import React, { useState } from 'react'
import { Segment, Grid, Statistic } from 'semantic-ui-react'

export default () => {

    return (
        <div className="carInfoForm">
            <Segment.Group horizontal>
                <Segment textAlign='center' color='teal'>HONDA</Segment>
                <Segment textAlign='center' color='teal'>CIVIC</Segment>
                <Segment textAlign='center' color='teal'>2019</Segment>
                <Segment textAlign='center' color='teal'>2+ minimal</Segment>
            </Segment.Group>
            <dr/>
            <Grid columns='three' divided textAlign="center">
                <Grid.Column>
                    <Statistic size='tiny'>
                        <Statistic.Value style={{color:"#4DB6AC"}}>25</Statistic.Value>
                        <Statistic.Label >วันที่เริ่มคุ้มครอง</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column>
                    <Statistic size='tiny'>
                        <Statistic.Value style={{color:"#4DB6AC"}}>มกราคม</Statistic.Value>
                        <Statistic.Label >เดือนที่เริ่มคุ้มครอง</Statistic.Label>
                    </Statistic>
                </Grid.Column>
                <Grid.Column>
                    <Statistic size='tiny'>
                        <Statistic.Value style={{color:"#4DB6AC"}}>2020</Statistic.Value>
                        <Statistic.Label >ปีที่เริ่มคุ้มครอง</Statistic.Label>
                    </Statistic>
                </Grid.Column>
            </Grid>
        </div>
    )
}
