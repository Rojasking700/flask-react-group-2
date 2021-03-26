import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import getToken from '../App';
// 'C:/Users/groja/Documents/codingTempleFeb2021/week7/EAT/react2/my-app/src/App'

export default class Navbar extends Component {
    constructor(){
        super();
        this.state ={
            redirect: null,
            token: null
        }
    }

    // component did mount
    async componentDidMount(){
        console.log('mounted navbar');
        // this.props.getToken()
        // .then(data => this.setState({token: data}))
        // .catch(error => this.setState({token: null}))
        let token = await this.props.getToken()
        console.log(token)
        // let localToken = localStorage.getItem('token') == '';
        // console.log(localToken);
        // this.setState({token: token['token']})
        // return(token['token'])
    }

    
    render() {
        console.log('navbar rendered')
        // this.props.getToken()
        if( this.props.token ){
            console.log('Navbar',this.props.token) 
            return(<div>
                <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><span className="fas fa-utensils"></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/CreatePost">Create Post</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/CreateAcount">Create Account</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/login">Logout</Link>
                        </li>
                    
                    </ul>
                    </div>
                </div>
                </nav>
        </div>)
        }else{
            console.log('navbar',this.props.token)
        
       
        return (
            <div>
                    <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><span className="fas fa-utensils"></span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CreatePost">Create Post</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/CreateAcount">Create Account</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/login">Login</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        )
        }
    }
}
