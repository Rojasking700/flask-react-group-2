import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class CreateAcount extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }

    async createAccount(e){
        e.preventDefault()
        // let token = await this.props.get_token()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        let res = await fetch('http://127.0.0.1:5000/auth/signup', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "username": e.target.username.value,
                "email": e.target.email.value,
                "password": e.target.password.value,
                "confirm_password": e.target.confrimPassword.value,
                "token": null,
                "token_expiration": null

            })
        })
        // let newAccount = await res.json();
        this.setState({ redirect: `/index/`})

    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (

            <div className="container">
                <form onSubmit={(e) => this.createAccount(e)}>
                    <label for="exampleInputPassword1" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Username" />
                    <br></br>
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Email" />
                    <br></br>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="passwordField" className="form-control" name="password" placeholder="Password" />
                    <br></br>
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="passwordField" className="form-control" name="confrimPassword" placeholder="Confirm Password" />
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                    <br></br>
                </form>
            </div>
        )
    }
}