import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import CarRegisterForm from '../pages/CarRegisterForm'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/car-information" component={CarRegisterForm}/>
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    )
}
