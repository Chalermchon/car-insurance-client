import React from 'react'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'

function MenuButton() {
    const goToForAgentPage = () => {
        window.location = '/agent-login'
    }
    const goToIndex = () => {
        window.location = '/'
    }
    
    return (
        <div>
            <Menu fixed='top' inverted>
                <Container style={{ margin: '1em' }} >
                    <Menu.Item as='a' header onClick={goToIndex}>
                        {/* <Image size='mini' src='/logo.png' style={{ margin: '1em' }} /> */}
                        Asia insurance
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item simple text='menu'  >
                            <Dropdown.Menu >
                                <Dropdown.Item text='For agent' onClick={goToForAgentPage}/>
                                <Dropdown.Item text='Contact us' />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default MenuButton
