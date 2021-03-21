import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CreateAcount extends Component {
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
                    <h2>Create an account</h2>
                </div>
                <form onSubmit={(e) => this.createPost(e)}>
                    {/* <input type="text" className="form-control" name="title" placeholder="Title" />
                    <input type="text" className="form-control" name="content" placeholder="Content" />
                    <button type="submit" className=" btn btn-outline-info">Submit</button> */}

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="email@domain.com" aria-describedby="emailHelp"/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Username</label>
                        <input type="password" className="form-control" name="username" placeholder="Username"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="Password" placeholder="Password"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>                    
                </form>
            </div>
        )
    }
}
