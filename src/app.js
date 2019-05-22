import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import ResetPassword from './components/Auth/ResetPassword'
import NewPassword from './components/Auth/NewPassword'
import Confirm from './components/Auth/Confirm'



class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/confirm/:code" component={Confirm} />
              <Route path="/login" component={Login} />
              <Route path="/resetpassword" component={ResetPassword} />
              <Route path="/newpassword/:id" component={NewPassword} />
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
