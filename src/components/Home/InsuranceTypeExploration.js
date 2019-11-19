import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'


import InsuranceDetails from './InsuranceDetails';

export default function InsuranceTypeExploration() {
    const [activeItem, setActiveItem] = useState('ประเภท 2 plus');
    // const [activeItem, setActiveItem] = useState(selectedType + '-1')

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    }

    return (
        <div className='lte-menu-bar'>
                <Menu pointing widths="5">
                    <Menu.Item
                        key='1'
                        name='ประเภท 1'
                        active={activeItem === 'ประเภท 1'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='2'
                        name='ประเภท 2'
                        active={activeItem === 'ประเภท 2'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='3'
                        name='ประเภท 2 plus'
                        active={activeItem === 'ประเภท 2 plus'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='4'
                        name='ประเภท 3'
                        active={activeItem === 'ประเภท 3'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        key='5'
                        name='ประเภท 3 plus'
                        active={activeItem === 'ประเภท 3 plus'}
                        onClick={handleItemClick}
                    />
                </Menu>

                <Segment>
                    <InsuranceDetails insuranceType={activeItem} />
                </Segment>

        </div>
    )
}

