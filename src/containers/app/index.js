import React from 'react'
import {
  Route, Link, Switch, RouteNest
} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Button } from 'antd'
import Login from '../../components/login'
import About from '../about'
import SignUp from '../../components/signup'
import Dashboard from '../../components/dashboard'
import { persistor } from '../../store'
import AuthenticatedRoute from '../../components/authenticatedRoute'
import 'antd/dist/antd.css'
import { logout } from '../../reducers/auth'
import Logout from './logout'
import Nav from '../../components/nav/navToolBar'
import FloorMap from '../../components/maps/map'
import Guide from '../../components/guide'

const App = () => (
  <PersistGate loading={null} persistor={persistor}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/sign-up" component={SignUp} />
      <Nav>
        <Route exact path="/dashboard/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/map" component={FloorMap} />
        <Route exact path="/dashboard/guide" component={Guide} />
      </Nav>
    </Switch>
  </PersistGate>
)

export default App
