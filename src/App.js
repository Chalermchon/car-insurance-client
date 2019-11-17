import React from 'react'
import { Container } from 'semantic-ui-react'

import Routing from './routes'
import MenuButton from './components/util/MenuButton'

export default function App() {
    return (
        <div>
            <MenuButton />
            <Container fluid style={{ marginTop: '100px', backgroundColor: "" }}>
                <Routing />
            </Container>
        </div>
    )
}
