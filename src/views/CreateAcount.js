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
                "password": e.target.password.value
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

            <div>
                <form onSubmit={(e) => this.createAccount(e)}>
                    <input type="text" className="form-control" name="username" placeholder="Username" />
                    <br></br>
                    <input type="text" className="form-control" name="email" placeholder="Email" />
                    <br></br>
                    <input type="password" className="form-control" name="password" placeholder="Password" />
                    <br></br>
                    <button type="submit" className="btn btn-outline-info">Submit</button>
                    <br></br>
                </form>
            </div>
        )
    }
}