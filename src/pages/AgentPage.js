import React from 'react'
import { Grid, Label } from 'semantic-ui-react'

export default function AgentPage() {
    let recentCustomer = <div>asdsdfg</div>


    return (
        <div style={{ paddingRight: '5%', paddingLeft: '5%' }}>
            <Grid divided='vertically'>
                <Grid.Row columns={2} textAlign="center">
                    <Grid.Column>
                        <Label color="olive" size="big">
                            ลุกค้าล่าสุด
                        </Label>
                        {recentCustomer}
                    </Grid.Column>
                    <Grid.Column>
                        <Label color="olive" size="big">
                            ลุกค้าทั้งหมด
                        </Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
