import React from 'react'
import { Step, Icon, Segment, Image } from 'semantic-ui-react'

function TestPage() {
    return (
        <div>
            <Step.Group attached='top' widths='3'>
                <Step>
                    <Icon name='search' />
                    <Step.Content>
                        <Step.Title>Searching</Step.Title>
                        <Step.Description>Enter billing information</Step.Description>
                    </Step.Content>
                </Step>

            </Step.Group>
        </div>
    )
}

export default TestPage
