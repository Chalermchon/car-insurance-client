import React, { useState, useEffect } from 'react'
import { Menu, Segment, Grid, Table } from 'semantic-ui-react'

function InsuranceDetails(props) {
  const [selectedType, setSelectedType] = useState(props.insuranceType)
  const [activeItem, setActiveItem] = useState(selectedType + '-1')

  // selectType = () => {
  //   if(this.props.insuranceType === 1) return list
  //   else return listee
  // }


  var list =
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item
            name={selectedType + '-1'}
            active={activeItem === (selectedType + '-1')}
          // onClick={handleItemClick}
          />
          <Menu.Item
            name={selectedType + '-2'}
            active={activeItem === (selectedType + '-2')}
          // onClick={handleItemClick}
          />
          <Menu.Item
            name={selectedType + '-3'}
            active={activeItem === (selectedType + '-3')}
          // onClick={handleItemClick}
          />
          <Menu.Item
            name={selectedType + '-4'}
            active={activeItem === (selectedType + '-4')}
          // onClick={handleItemClick}
          />
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={12}>
        <Segment>
          <Table basic>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>Requires call</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                <Table.Cell>None</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </Grid.Column>
    </Grid>

  return (
    <div>
      {list}
    </div>
  )
}

export default InsuranceDetails
