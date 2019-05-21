import React from 'react'
import {   Container } from 'semantic-ui-react'
import axios from 'axios'
import RegisterForm from './RegisterForm'
// import UserShow from './UserShow'
import { withRouter } from 'react-router-dom'
import Flash from '../../lib/Flash'


class Register extends React.Component{
  constructor(){
    super()

    // image success, when true, will display flash message and remove image upload button
    this.state = {
      postData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  // taking the value and name of input to set in state, before making post request to register
  handleChange({ target: { name, value }}) {
    const postData = {...this.state.postData, [name]: value }
    const errors= {}
    this.setState({ postData, errors })
  }

  // submitting the data to back end register route
  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/register', this.state.postData)
      .then(() => {
        Flash.setMessage('success', 'Please check your email address to verify your account' )
        this.props.history.push('/login')
      })
      .catch(err => this.setState({ errors: err.response.data }))
  }



  render(){
    console.log(this.state.postData)
    return(
      <Container>
        <RegisterForm
          errors={this.state.errors}
          postData={this.state.postData}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </Container>
    )
  }
}


export default withRouter(Register)
