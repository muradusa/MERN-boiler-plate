import React, { Component } from "react";

import { registerUser } from "../../actions/user_actions";

class Register extends Component {

    state = {
        lastname: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    displayErrors = errors => {
        errors.map((error, i) => <p key={i}>{error}</p> )
    }

    isFormValid = () => {
        let errors = [];
        let error;

        if(this.isFormEmpty(this.state)){
            error = { message: "Fill in all fields"};
            this.setState({ errors: errors.concat(error)})
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: "Password is invalid"};
            this.setState({ errors: errors.concat(error)})
        } else  {
            return true;
        }
    }
    
    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.lenght < 6 || passwordConfirmation.lenght < 6){
            return false;
        } else if (password!==passwordConfirmation) {
            return false;
        } else {
            return true;
        }
        

    }

    isFormEmpty = ({ lastname, name, email, password, passwordConfirmation}) => {
        return (
            !name.length ||
            !lastname.length ||
            !email.length ||
            !password.length ||
            !passwordConfirmation.length 
        );
    }


    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname,
            passwordConfirmation: this.state.passwordConfirmation
        }

        if(this.isFormValid()) {
            this.setState({ errors: [] })
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response => {
                if(response.payload.success){

                } else {

                }
            })
        }
    }

  render() {
    return (
      <div className="container">
        <h2>Sign Up</h2>
        <div className="row">
          <form className="col s12" />
          <div className="row">
            <div className="input-field col s12">
              <input
                name="lastname"
                value={this.state.lastname}
                onChange={(e) => this.handleChange(e)}
                id="lastname"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="lastname">lastname</label>
              <span
                className="helper-text"
                data-error="Type correct email"
                data-success="right"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="name"
                value={this.state.name}
                onChange={(e) => this.handleChange(e)}
                id="name"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="name">name</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                value={this.state.email}
                onChange={(e) => this.handleChange(e)}
                id="email"
                type="email"
                className="validate"
              />
              <label className="active" htmlFor="email">email</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleChange(e)}
                id="password"
                type="password"
                className="validate"
              />
              <label className="active" htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={(e) => this.handleChange(e)}
                id="passwordConfirmation"
                type="password"
                className="validate"
              />
              <label className="active" htmlFor="passwordConfirmation">Password Confirmation</label>
            </div>
          </div>

          {this.state.errors.length > 0 && (
            <div>{this.displayErrors(this.state.errors)}</div>
          )}

          <div className="row">
            <div className="col s12">
              <button
                className="btn waves-effect red lighten-2"
                type="submit"
                name="action"
                onClick={this.submitForm}
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
