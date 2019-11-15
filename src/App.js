import React from 'react'
import {  Container } from 'semantic-ui-react'

import Routing from './routes'
import MenuButton from './components/util/MenuButton'

function App() {

    return (
        <div class="ui segments">
            <MenuButton/>
            <Container fluid style={{marginTop: '100px'}}>
                <Routing/>
            </Container>
        </div>
    )
}

export default App
