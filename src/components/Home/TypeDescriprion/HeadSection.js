import React from 'react'
import { Grid, Label, Icon, Message } from 'semantic-ui-react'

export default function HeadSection(props) {

    return (
        <Grid>
            <Grid.Column floated='left' width={12}>
                <Grid>
                    <Grid.Column floated='left' width={5} textAlign='center'>
                        <div style={{ padding: "15px", height: "100%", display: 'flex', flexDirection: 'row', backgroundColor: '#D5F5E3', justifyItems: 'center', alignItems: 'center' }}>
                            <h3 style={{ margin: "auto", display: "block" }}>{props.name}</h3>
                        </div>
                    </Grid.Column>
                    <Grid.Column floated='right' width={11}>
                        <Message >
                            <Message.Header>{props.title}</Message.Header>
                            <Message.List items={props.items}/>
                        </Message>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column floated='right' width={4}>
                <div style={{ height: "100%", display: 'flex', flexDirection: 'row', backgroundColor: '#F9E79F', justifyItems: 'center', alignItems: 'center' }}>
                    <h3 style={{ margin: "auto", display: "block", alignItems: "right" }}>{props.price} บาท</h3>
                </div>
            </Grid.Column>
        </Grid>
    )
}
