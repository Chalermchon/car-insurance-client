import React from 'react'
import { Form, Select, Responsive, Input } from 'semantic-ui-react'

function PersonalInformationForm() {
    return (
        <div>
            <Responsive {...Responsive.onlyMobile}>
                <Form className='cr-form-mobi' size='mini'>
                    
                </Form>
            </Responsive>

            <Responsive {...Responsive.onlyTablet}>
                <Form className='cr-form-tabl' size='small'>
                   
                </Form>
            </Responsive>

            <Responsive {...Responsive.onlyComputer}>
                <Form className='cr-form-comp' size='large'>
                    <Form.Group>
                        
                    </Form.Group>
                </Form>

            </Responsive>
        </div>
    )
}

export default PersonalInformationForm
