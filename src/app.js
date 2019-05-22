import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import ResetPassword from './components/Auth/ResetPassword'
import NewPassword from './components/Auth/NewPassword'
import Confirm from './components/Auth/Confirm'
import Home from './components/common/Home'
import NavBar from './components/common/Navbar'
import FlashMessages from './components/common/FlashMessages'






class App extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <NavBar />
            <FlashMessages />
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/confirm/:code" component={Confirm} />
              <Route path="/login" component={Login} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/newpassword/:id" component={NewPassword} />
              <Route path="/" component={Home} />

            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
