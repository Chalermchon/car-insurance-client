import React, { useState } from 'react'
import { Menu, Segment, Grid } from 'semantic-ui-react'
import InsuranceDetails from './InsuranceDetails';

function InsuranceTypeExploration() {
    const [activeItem, setActiveItem] = useState('1');

    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <Grid.Row>
            <Grid.Column width="14">
                <Menu pointing widths="5">
                    <Menu.Item
                        name='1'
                        active={activeItem === '1'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='2'
                        active={activeItem === '2'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='3'
                        active={activeItem === '3'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='4'
                        active={activeItem === '4'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='5'
                        active={activeItem === '5'}
                        onClick={handleItemClick}
                    />
                </Menu>

                <Segment>
                    <InsuranceDetails insuranceType={activeItem}/>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    )
}

export default InsuranceTypeExploration
