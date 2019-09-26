import React from 'react'
import { Grid } from 'semantic-ui-react'

import LicensePlate from '../components/LicensePlate'

function Home() {
    return (
        <Grid padded centered>
            <Grid.Row>
                <Grid.Column width="10">
                    <LicensePlate />
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}

export default Home
