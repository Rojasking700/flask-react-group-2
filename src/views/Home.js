import React, { Component } from 'react';
import Blog from '../components/Blog';
import { Link } from 'react-router-dom'


export default class Home extends Component {
    constructor(){
        super();
        this.state={
            blog : []
        }
    }

    // async componentDidMount(){
    //     console.log("made it2")
    //     let res = await fetch(`http://127.0.0.1:5000/blog/posts`,{
    //         method: 'POST'
    //     })
    //     let posts = await res.json();
    //     this.setState({ blog: posts })
    //     console.log("made it")
    // }

    componentDidMount(){
        fetch(`http://127.0.0.1:5000/blog/posts`)
        .then(res => res.json())
        .then(data => this.setState({blog: data}))
        .catch(error => console.log(error))
    }


    render() {
        return (
            <React.Fragment>

                <div className="container">
                    <div class="jumbotron">
                        <h1 class="display-4 hungry">Hungry to expand your recipe rolodex?</h1>
                        <p class="lead">This is an invitation to the internet's first self-proclaimed dinner party where you the user shares, rates, recreates, and etc. amongst other chefs!</p>
                        <hr class="my-4"></hr>
                        <p>Reddit? Never heard of it. </p>
                        <p class="lead">
                            <a class="btn" href="#" role="button">Get Started!</a>
                        </p>
                        <br/>
                    </div>
                    <div className="icon"><p>
                        <i class="fa fa-drumstick-bite"></i>
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.state.blog.reverse().map(p => <Blog key={p.id} blog={p} title={this.props.title} content={this.props.content} user={this.props.user} />)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
