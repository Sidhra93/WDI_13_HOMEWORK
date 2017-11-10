import React from 'react'

export default class PasswordChecker extends React.Component{
  constructor(props){
    super(props)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.state = {
      strength: '',
      password: '',
      rules: {
        hasLowerCase: false,
        hasUpperCase: false,
        isValidLength: false,
        hasNumber: false,
        hasSpecialCharacter: false
      }
    }
  }

  onPasswordChange(event){
    var points = 0
    this.setState({password: event.target.value})
    var password = this.state.password
    this.setState({
      rules: {
        hasLowerCase: password.match(/[a-z]/) ? points++ : false,
        hasUpperCase: password.match(/[A-Z]/) ? points++ : false,
        isValidLength: password.length >= 8 ? points++ : false,
        hasNumber: password.match(/\d/) ? points++ : false,
        hasSpecialCharacter: password.match(/\W/) ? points++ : false
      }
    })
    if (points > 3) {
      this.setState({strength: 'strong'})
    } else if (points > 1) {
      this.setState({strength: 'medium'})
    } else if (points == 1){
      this.setState({strength: 'weak'})

    }
  }

  render(){
    return(
      <div>
      <input
        type="text"
        placeholder="Enter Password"
        onChange={this.onPasswordChange} />
      <p>{this.state.strength}</p>
      </div>
    )
  }
}
