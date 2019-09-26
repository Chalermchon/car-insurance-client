import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Dropdown, Responsive } from 'semantic-ui-react'

function MenuButton() {
    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <Menu secondary fixed='top' size="mini">
                    <Menu.Item position='right' >
                        <Dropdown
                            button
                            simple
                            className='icon basic'
                            direction="left"
                            icon="bars"
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item text='For agent' />
                                <Dropdown.Item text='Contact us' />
                            </Dropdown.Menu>
                            
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Responsive>

            <Responsive {...Responsive.onlyTablet}>
            <Menu secondary fixed='top' size="small">
                    <Menu.Item position='right' >
                        <Dropdown
                            button
                            simple
                            className='icon basic'
                            direction="left"
                            icon="bars"
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item text='For agent' />
                                <Dropdown.Item text='Contact us' />
                            </Dropdown.Menu>
                            
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
                <Menu secondary fixed='top' size="large">
                    <Menu.Item position='right' >
                        <Dropdown
                            button
                            simple
                            className='icon basic'
                            direction="left"
                            icon="bars"
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item text='For agent' />
                                <Dropdown.Item text='Contact us' />
                            </Dropdown.Menu>
                            
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Responsive>

        </div>
    )
}

export default MenuButton
