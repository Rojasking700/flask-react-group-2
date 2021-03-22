import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }
    render() {
        return (
            <div className="container">
                <div>
                    <h2>Login</h2>
                </div>
                <form onSubmit={(e) => this.createPost(e)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Username</label>
                        <input type="password" className="form-control" name="username" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn">Submit</button>  
                </form>
            </div>
        )
    }
}
