import React from 'react'
import { Button } from 'semantic-ui-react'

export default function TypeOneTable() {
    const gotoContectUsPage = () => {
        window.location = '/contact-us'
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: "auto", display: "block" }}>
                <Button size='huge' color='teal' onClick={gotoContectUsPage}>contect us</Button>
            </h1>
        </div>

    )
}
