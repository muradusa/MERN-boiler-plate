import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {

    state = {
        lastname: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: []
    };

  render() {
    return (
      <div className="container">
        <h2>Create an account</h2>
        <div className="row">
          <form className="col s12" />
          <div className="row">
            <div className="input-field col s12">
              <input
                name="lastname"
                value={this.state.lastname}
                //onChange={(e) => this.handleChange(e)}
                id="lastname"
                type="text"
                className="validate"
              />
              <label htmlFor="email">lastname</label>
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
                //onChange={(e) => this.handleChange(e)}
                id="name"
                type="text"
                className="validate"
              />
              <label htmlFor="email">name</label>
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
                //onChange={(e) => this.handleChange(e)}
                id="email"
                type="email"
                className="validate"
              />
              <label htmlFor="email">email</label>
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
                //onChange={(e) => this.handleChange(e)}
                id="password"
                type="password"
                className="validate"
              />
              <label htmlFor="email">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                //onChange={(e) => this.handleChange(e)}
                id="passwordConfirmation"
                type="password"
                className="validate"
              />
              <label htmlFor="email">Password Confirmation</label>
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
