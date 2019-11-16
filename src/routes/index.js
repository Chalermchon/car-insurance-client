import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import CarRegisterPage from '../pages/CarRegisterPage'
import advanceCarFormPage from '../pages/AdvanceCarFormPage'
import AgentLoginPage from '../pages/AgentLoginPage'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/car-information" component={CarRegisterPage}/>
            <Route exact path="/advance-car-form" component={advanceCarFormPage}/>
            <Route exact path="/agent-login" component={AgentLoginPage}/>
        </Switch>
    )
}
