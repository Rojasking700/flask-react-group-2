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

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  getToken = async () => {
    let res = await fetch('http://localhost:5000/tokens', {
          method: 'POST',
          headers :{
            'Authorization': 'Basic ' + btoa('abcd123:abcd123')
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
          <Route exact path="/login" render={() => <Login /> } />
          <Route exact path="/createpost" render={() => <CreatePost /> } />
        </Switch>
      </main>
      <Footer />
      </div>
    )
  }
}

