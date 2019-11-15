import React from 'react'
import { Header, Responsive, Grid } from 'semantic-ui-react'

function Label({text, align}) {
    return (
        <Grid.Row style={{paddingBottom: '0px', paddingTop: '0px', textAlign: align}}>
            <Responsive {...Responsive.onlyMobile}>
                <Header as="h4" color="black" style={{ fontFamily: 'Kanit, sans-serif'}}>{text}</Header>
            </Responsive>

            <Responsive {...Responsive.onlyTablet}>
                <Header as="h3" color="black" style={{ fontFamily: 'Kanit, sans-serif'}}>{text}</Header>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
                <Header as="h2" color="black" style={{ fontFamily: 'Kanit, sans-serif'}}>{text}</Header>
            </Responsive>
        </Grid.Row>
    )
}

export default Label
