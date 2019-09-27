import React from 'react'
import { Header, Responsive, Grid } from 'semantic-ui-react'

function Label({text}) {
    return (
        <Grid.Row style={{paddingBottom: '0px', paddingTop: '0px'}}>
            <Responsive {...Responsive.onlyMobile}>
                <Header as="h6" color="grey">{text}</Header>
            </Responsive>


            <Responsive {...Responsive.onlyTablet}>
                <Header as="h3" color="grey">{text}</Header>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
                <Header as="h2" color="grey">{text}</Header>
            </Responsive>
        </Grid.Row>
    )
}

export default Label
