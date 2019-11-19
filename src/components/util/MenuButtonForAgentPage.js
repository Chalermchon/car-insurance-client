import React from 'react'
import { Container, Dropdown, Menu, Icon } from 'semantic-ui-react'

export default function MenuButtonForAgentPage() {
    const goToForAgentPage = () => {
        window.location = '/agent-login'
    }
    const goToContactUsPage = () => {
        window.location = '/contact-us'
    }
    const goToIndex = () => {
        window.location = '/'
    }
    
    return (
        <div style={{}}>
            <Menu fixed='top' inverted color="black">
                <Container style={{ margin: '0.5em'}} >
                    <Menu.Item as='a' header onClick={goToIndex}>
                        <h3>Asia insurance</h3>
                    </Menu.Item>
                    <Menu.Item as='a' header onClick={goToIndex}>
                        <h3>คำขอเอาประกันล่าสุด</h3>
                    </Menu.Item>
                    <Menu.Item as='a' header onClick={goToIndex}>
                        <h3>ลุกค้าทั้งหมด</h3>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item simple text='menu'  >
                            <Dropdown.Menu >
                                <Dropdown.Item text='For agent' onClick={goToForAgentPage}/>
                                <Dropdown.Item text='Contact us' onClick={goToContactUsPage}/>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}


