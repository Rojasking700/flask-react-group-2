import React, { Component } from 'react';
import Blog from '../components/Blog';
// import { Link } from 'react-router-dom'


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
                    <div className="row">
                        {this.state.blog.reverse().map(p => <Blog key={p.id} blog={p} title={this.props.title} content={this.props.content} user={this.props.user} />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
