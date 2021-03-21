import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BlogDetail from './views/BlogDetail';
import CreateAcount from './views/CreateAcount';
import CreatePost from './views/CreatePost';
import Home from './views/Home';
import Login from './views/Login';
import { Redirect } from 'react-router-dom'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      redirect: null,
      posts: [],
      username: null,
      password: null
    }
  }

  handleLogin = (e) =>{
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    this.setState({
      username : username,
      password : password,
      redirect: `/`
    })
    this.getToken(username,password)
  }

  getToken = async (username, password) => {
    let res = await fetch('http://localhost:5000/tokens', {
          method: 'POST',
          headers :{
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
          }
    })
    let token = await res.json();
    console.log(token);
    return token
  }

  render() {
    return (
      <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home blog={this.blog}  />} />
          <Route exact path="/blogdetail/:id" render={({match}) => <BlogDetail match={match} /> } />
          <Route exact path="/createacount" render={() => <CreateAcount /> } />
          <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} getToken={this.getToken} redirect={this.state.redirect}/> } />
          <Route exact path="/createpost" render={() => <CreatePost /> } />
        </Switch>
      </main>
      </div>
    )
  }
}

