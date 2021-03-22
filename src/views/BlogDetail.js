import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export default class BlogDetail extends Component {

    constructor(){
        super();

        this.state={
            blog: [],
            comments: []
        }
    }

    // componentDidMount(){
    //     fetch(`http://127.0.0.1:5000/blog/posts/${this.props.match.params.id}`)
    //     .then(res => res.json())
    //     .then(data => this.setState({blog: data}))
    //     .catch(error => console.log(error))
    // }

    async componentDidMount(){
        let token = await this.props.getToken();
        console.log(token)
        let res = await fetch(`http://127.0.0.1:5000/blog/posts/${this.props.match.params.id}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token['token'],
                'Content-Type' : 'application/json'
            }
        })
        let posts = await res.json()
        this.setState({blog:posts})
    };
    


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
