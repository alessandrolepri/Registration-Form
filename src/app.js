import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.scss'

import Register from './components/Auth/Register'



class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Switch>
              <Route path="/register" component={Register} />
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
