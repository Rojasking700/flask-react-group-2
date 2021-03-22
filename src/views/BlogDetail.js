import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export default class BlogDetail extends Component {

    constructor(){
        super();

        this.state={
            blog: []
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:5000/blog/posts/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({blog: data}))
        .catch(error => console.log(error))
    }

    render() {
        const p = this.state.blog;
        return (
            <div className="container">
                <div class="card mb-3">
                <img
                    src="https://mdbootstrap.com/img/new/slides/041.jpg"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p class="card-text">
                    {p.content}
                    </p>
                    <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago by {p.user}</small>
                    </p>
                </div>
                </div>
            </div>
        )
    }
}
