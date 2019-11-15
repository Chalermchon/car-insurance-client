import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

import InsuranceDetails from './InsuranceDetails';

function InsuranceTypeExploration() {
    const [activeItem, setActiveItem] = useState('1');

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
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

            <Segment>
                <InsuranceDetails insuranceType={activeItem} />
            </Segment>
        </div>
    )
}

export default InsuranceTypeExploration
