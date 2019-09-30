import React, { useState, useEffect } from 'react'
import { Menu, Segment, Grid } from 'semantic-ui-react'

function InsuranceDetails(props) {    
    const [selectedType, setSelectedType] = useState(props.insuranceType)
    const [activeItem, setActiveItem] = useState(selectedType+'-1')
    const []

    useEffect(() => {
        if(selectedType !== props.insuranceType){
            setSelectedType(props.insuranceType)
            setActiveItem(props.insuranceType + '-1') 
        }else{
            setSelectedType(props.insuranceType) 
        }
    }, [selectedType, props.insuranceType]);

    const handleItemClick = (e, { name }) => setActiveItem(name)


    // selectType = () => {
    //   if(this.props.insuranceType === 1) return list
    //   else return listee
    // }

    var listee = <div>
      listee
    </div>
    
    var list =       
              <Grid>
                <Grid.Column width={4}>
                  <Menu fluid vertical tabular>
                    <Menu.Item
                      name={selectedType + '-1'}
                      active={activeItem === (selectedType + '-1')}
                      onClick={handleItemClick}
                    />
                    <Menu.Item
                      name={selectedType + '-2'}
                      active={activeItem === (selectedType + '-2')}
                      onClick={handleItemClick}
                    />
                    <Menu.Item
                      name={selectedType + '-3'}
                      active={activeItem === (selectedType + '-3')}
                      onClick={handleItemClick}
                    />
                    <Menu.Item
                      name={selectedType + '-4'}
                      active={activeItem === (selectedType + '-4')}
                      onClick={handleItemClick}
                    />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                  <Segment>
                    This is an stretched grid column. This segment will always match the
                    tab height
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
