import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'

export default function ContactUsPage() {
    return (
        <div style={{ marginRight: "20%", marginLeft: "20%" }} >
            <Segment style={{ textAlign: 'center' }} color='teal'>
                <Segment inverted style={{ textAlign: 'center' }}  color='teal'>
                    <h2>
                        C O N T A C T
                    </h2>
                </Segment>

                <h4 style={{ margin: "auto", display: "block" }}>
                    <br /><Icon name='home' size='large' /><br /><br /> 43 ซ.เพชรเกษม 48 บ้านด้วน ภาษีเจริญ กรุงเทพฯ 10160 <br /><br /><br />
                    <Icon name='time' size='large' /><br /><br /> 7.00 - 17.00<br />วันจันทร์ - วันศุกร์ <br /><br /><br />
                    <Icon name='mail' size='large' /><br /><br /> krongkaewj@asiainsurance.co.th   <br /><br /><br /> 
                    <Icon name='phone' size='large' /><br /><br />02-869-7420  ,  089-5024779   <br /><br />
                </h4>
            </Segment>
        </div>

    )
}
