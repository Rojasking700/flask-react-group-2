import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
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
      remember_me : false
    }
  }

  handleLogin = (e) =>{
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const remember_me = e.target.remember_me.value;
    this.setState({
      username : username,
      password : password,
      redirect: `/`,
      remember_me : remember_me
    })
    this.getToken()
  }

  getToken = async () => {
    let res = await fetch('http://localhost:5000/tokens', {
          method: 'POST',
          headers :{
            'Authorization': 'Basic ' + btoa(`${this.state.username}:${this.state.password}`)
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

