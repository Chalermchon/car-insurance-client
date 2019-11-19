import React, { useState } from 'react'
import { Menu, Segment, Transition } from 'semantic-ui-react'


import InsuranceDetails from './InsuranceDetails';

export default function InsuranceTypeExploration() {
    const [activeItem, setActiveItem] = useState('');
    const [visible, setVisible] = useState(false)
    // const [activeItem, setActiveItem] = useState(selectedType + '-1')

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        setVisible(true)
    }

    return (
        <div className='lte-menu-bar'>
                <Menu pointing widths="5">
                    <Menu.Item
                        key='1'
                        name='1'
                        active={activeItem === '1'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='2'
                        name='2'
                        active={activeItem === '2'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='3'
                        name='2 plus'
                        active={activeItem === '2 plus'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='4'
                        name='3'
                        active={activeItem === '3'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='5'
                        name='3 plus'
                        active={activeItem === '3 plus'}
                        onClick={handleItemClick}
                    />
                </Menu>

            <Transition visible={visible} animation='scale' duration={500}>
                <Segment>
                    <InsuranceDetails insuranceType={activeItem} />
                </Segment>
            </Transition>

        </div>
    )
}

