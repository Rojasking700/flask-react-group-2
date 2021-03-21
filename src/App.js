import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BlogDetail from './views/BlogDetail';
import CreateAcount from './views/CreateAcount';
import Home from './views/Home';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
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
        </Switch>
      </main>
      </div>
    )
  }
}

