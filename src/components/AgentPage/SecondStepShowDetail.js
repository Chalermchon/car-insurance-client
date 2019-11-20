import React, { useState } from 'react'
import { Button, Form, Input, Select, Divider, Grid, Statistic } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react'

export default (props) => {
    const [birthDate, setBirthDate] = useState('')

    const genderOptions = [
        { key: '1', text: 'One', value: 'one' },
        { key: '2', text: 'Two', value: 'two' },
        { key: '3', text: 'Three', value: 'three' },
    ]
    const identNumber = [
        { key: 'ni', text: 'เลขบัตรประชาชน', value: 'nin' },
        { key: 'pp', text: 'เลขหนังสือเดินทาง', value: 'ppn' },
    ]

    const onChange = (event, { value }) => {
        setBirthDate(value)
    }
    return (
        <div className='carInfoForm'>
            <br />
            <Divider horizontal>personal infomation</Divider>
            <br />

            <Form className='cr-form-comp' size='large'>
                <Grid columns='three' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>นาย</Statistic.Value>
                            <Statistic.Label>คำนำหน้าชื่อ</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>เฉลิมชนม์</Statistic.Value>
                            <Statistic.Label>ชื่อจริง</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='tiny'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>อ่อนบัว</Statistic.Value>
                            <Statistic.Label>นามสกุล</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
                
                <Grid columns='two' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>1120022254862</Statistic.Value>
                            <Statistic.Label>เลขบัตนประชาชน</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>15-05-1997</Statistic.Value>
                            <Statistic.Label>วัน เดือน ปีเกิด</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
                <Grid columns='one' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>admin@gmail.com</Statistic.Value>
                            <Statistic.Label>อีเมล</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
                <Grid columns='two' divided textAlign="center">
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>084 5858267</Statistic.Value>
                            <Statistic.Label>เบอร์โทรศัพท์</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size='mini'>
                            <Statistic.Value style={{color:"#4DB6AC"}}>เกมเมอร์</Statistic.Value>
                            <Statistic.Label>อาชีพ</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid>
                
                <br />
                <br />
            </Form>
        </div>
    )
}
