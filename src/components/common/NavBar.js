import React from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Menu, Icon } from 'semantic-ui-react'
import Auth from '../../lib/Auth'


class NavBar extends React.Component{
  constructor(){
    super()

    this.state={
      activeItem: 'home'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    if(name === 'home')this.props.history.push('/')
    if(name === 'Login')this.props.history.push('/login')
    if(name === 'Sign Up')this.props.history.push('/register')
  }

  logout(){
    Auth.removeToken()
    this.props.history.push('/')
  }


  render() {
    const { activeItem } = this.state


    return (
      <Segment inverted id="nav">
        <Menu stackable inverted pointing secondary>
          <Menu.Item
            name='home'
            active={this.props.location.pathname === '/'}
            onClick={this.handleItemClick}
          > <Icon name='home' /> Home
          </Menu.Item>

          <Menu.Menu position='right'>

            {!Auth.isAuthenticated() && <Menu.Item
              name='Sign Up'
              onClick={this.handleItemClick}
            > <Icon name='add user' /> Sign Up
            </Menu.Item>}

            {!Auth.isAuthenticated() && <Menu.Item
              name='Login'
              onClick={this.handleItemClick}
            > <Icon name='user circle'/> Log In
            </Menu.Item>
            }

            {
              Auth.isAuthenticated() &&
              <Menu.Item
                name='Logout'
                onClick={this.logout}
              > <Icon name='remove user' /> Logout
              </Menu.Item>

            }

          </Menu.Menu>
        </Menu>
      </Segment>


    )
  }
}



export default withRouter(NavBar)
