import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import CarRegisterPage from '../pages/CarRegisterPage'
import AdvanceCarFormPage from '../pages/AdvanceCarFormPage'
import AgentLoginPage from '../pages/AgentLoginPage'
import ContactUsPage from '../pages/ContactUsPage'
import AgentPage from '../pages/AgentPage'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/car-information" component={CarRegisterPage}/>
            <Route path="/advance-car-form" component={AdvanceCarFormPage}/>
            <Route path="/agent-login" component={AgentLoginPage}/>
            <Route path="/contact-us" component={ContactUsPage}/>
            <Route path="/agent-page" component={AgentPage}/>
        </Switch>
    )
}
