import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import CarRegisterPage from '../pages/CarRegisterPage'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/car-information" component={CarRegisterPage}/>
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    )
}
