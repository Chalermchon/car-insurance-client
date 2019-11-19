import React from 'react'
import { Container } from 'semantic-ui-react'

import Routing from './routes'
import MenuButton from './components/util/MenuButton'
import MenuButtonForAgentPage from './components/util/MenuButtonForAgentPage'

export default function App(props) {

    return (
        <div>
            {/* <MenuButtonForAgentPage/> */}
            <MenuButton/>
            <Container fluid style={{ marginTop: '100px'}}>
                <Routing/>
            </Container>
        </div>
    )
}
