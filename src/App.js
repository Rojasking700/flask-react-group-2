import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
// import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import BlogDetail from './views/BlogDetail';
import CreateAcount from './views/CreateAcount';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import Footer from './components/Footer';
import CreateComment from './views/CreateComment';
// import { Redirect } from 'react-router-dom'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      redirect: null,
      posts: [],
      username: null,
      password: null,
      remember_me : false,
      token1: null
    }

  }
 
  

   handleLogin = async(e) =>{
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember_me = e.target.remember_me.value;
    this.setState({
      username : username,
      password : password,
      // redirect: `/`,
      remember_me : remember_me
    })
    // this.getToken()
    let token = await this.getToken(username,password);
    console.log(token)
    console.log('log in ', token['token']);
    this.setState({token1 : token['token']});
    console.log('hello', this.state.token1);
    console.log('logged');
  }

  getToken = async(username=this.state.username, password=this.state.password) => {
    let res = await fetch('http://localhost:5000/tokens', {
          method: 'POST',
          headers :{
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            // 'Authorization': 'Basic ' + btoa('abcd123:abcd123')
          }
    })
    let token = await res.json();
    
    
    console.log('getToken()', token['token']);
    // localStorage.setItem('token', token['token'])
    return token
  }
  
  // checkToken = async () => {
  //   // let res = fetch(this.getToken());
  //   let token = await this.getToken()
  //   // console.log(this.getToken())
  //   return token
  // }


  render() {
    
    return (
      <div>
      <Navbar  getToken={this.getToken} token={this.state.token1}/> 
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home blog={this.blog}  />} />
          <Route exact path="/blogdetail/:id" render={({ match }) => <BlogDetail match={ match } getToken={this.getToken}/> } />
          <Route exact path="/createacount" render={() => <CreateAcount getToken={this.getToken}/> } />
          <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} getToken={this.getToken} redirect={this.state.redirect}/> } />
          <Route exact path="/createpost" render={() => <CreatePost getToken={this.getToken}/> } />
          <Route exact path="/createcomment/:id" render={({match}) => <CreateComment match={ match } getToken={this.getToken}/> } />
        </Switch>
      </main>
      <Footer />
      </div>
    )
  }

}