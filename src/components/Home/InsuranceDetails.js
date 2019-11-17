import React, { useState, useEffect } from 'react'
import { Menu, Grid } from 'semantic-ui-react'

import TypeOneTable from './InsuranceTable/TypeOneTable'
import TypeTwoTable from './InsuranceTable/TypeTwoTable'
import TypeTwoPlusTable from './InsuranceTable/TypeTwoPlusTable'
import TypeThreeTable from './InsuranceTable/TypeThreeTable'
import TypeThreePlueTable from './InsuranceTable/TypeThreePlueTable'

function InsuranceDetails(props) {
  const [selectedType, setSelectedType] = useState(props.insuranceType)

  const [activeItem2, setActiveItem2] = useState("2 save spacial")
  const [activeItem2Plus, setActiveItem2Plus] = useState("2+ Minimal (ซ่อมอู่)")
  const [activeItem3, setActiveItem3] = useState("3 BEST")

  const handleItemClick2 = (e, { name }) => setActiveItem2(name)
  const handleItemClick2Plus = (e, { name }) => setActiveItem2Plus(name)
  const handleItemClick3 = (e, { name }) => setActiveItem3(name)

  useEffect(() => {
    if (props.insuranceType == 1) setSelectedType(props.insuranceType)
    if (props.insuranceType != 1) setSelectedType(props.insuranceType)
  })

  var list
  if (selectedType == "1") list = <TypeOneTable/>
  if (selectedType == "2") {
    list =
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='2 save spacial'
              active={activeItem2 === '2 save spacial'}
              onClick={handleItemClick2}
            />
            <Menu.Item
              name='2 Bumper'
              active={activeItem2 === '2 Bumper'}
              onClick={handleItemClick2}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13}>
          <TypeTwoTable kind={activeItem2}/>
        </Grid.Column>
      </Grid >
  }
  if (selectedType == '2 plus') {
    list =
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='2+ Minimal (ซ่อมอู่)'
              active={activeItem2Plus === '2+ Minimal (ซ่อมอู่)'}
              onClick={handleItemClick2Plus}
            />
            <Menu.Item
              name='2+ 35 UP'
              active={activeItem2Plus === '2+ 35 UP'}
              onClick={handleItemClick2Plus}
            />
            <Menu.Item
              name='2+ MAX (ซ่อมอู่)'
              active={activeItem2Plus === '2+ MAX (ซ่อมอู่)'}
              onClick={handleItemClick2Plus}
            />
            <Menu.Item
              name='2+ MAX (ซ่อมห้าง)'
              active={activeItem2Plus === '2+ MAX (ซ่อมห้าง)'}
              onClick={handleItemClick2Plus}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={13}>
          {/* <StandardDetailTable/> */}
          <TypeTwoPlusTable kind={activeItem2Plus}/>
        </Grid.Column>
      </Grid >
  }
  if (selectedType == "3") {
    list =
      <Grid>
        <Grid.Column width={3}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='3 BEST'
              active={activeItem3 === '3 BEST'}
              onClick={handleItemClick3}
            />
            <Menu.Item
              name='3 กันชน'
              active={activeItem3 === '3 กันชน'}
              onClick={handleItemClick3}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={13}>
          <TypeThreeTable kind={activeItem3}/>
        </Grid.Column>
      </Grid >
  }
  if (selectedType == "3 plus") list = <TypeThreePlueTable/>
  

  return (
    <div>
      {list}
    </div>
  )
}

export default InsuranceDetails
