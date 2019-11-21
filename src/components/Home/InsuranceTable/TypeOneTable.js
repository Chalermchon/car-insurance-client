import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default function TypeOneTable() {
    const gotoContectUsPage = () => {
        window.location = '/contact-us'
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: "auto", display: "block" }}>
                กรุณาติดต่อศุนย์ประกันตามที่อยู่ใน link นี้ <br/><br/>
                <Icon name='arrow alternate circle down outline' size='large' /><br/><br/>
                <Button size='huge' color='teal' onClick={gotoContectUsPage}>contect us</Button>
            </h3>
        </div>

    )
}
