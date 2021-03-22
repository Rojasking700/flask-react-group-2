import React, { Component } from 'react'
import Comments from '../components/Comments';
import { Link } from 'react-router-dom';

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
        let res2 = await fetch(`http://127.0.0.1:5000/blog/posts/${this.props.match.params.id}/comment`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token['token'],
                'Content-Type' : 'application/json'
            }
        })
        let posts = await res.json()
        let comments = await res2.json()
        this.setState({blog:posts, comments:comments})
    };
    


    render() {
        const p = this.state.blog;
        const c = this.state.comments;
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
                        <Link to="/">
                            <button className="btn btn-secondary float-end">Back to Blog</button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-secondary float-end">Create Comment</button>
                        </Link>
                    </p>
                    <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago by {p.user}</small>
                    </p>
                </div>
                </div>
                 <div className="row">
                     {this.state.comments.reverse().map(c => <Comments key={c.id} comments={c} content={this.state.content} user={this.state.user} />)} 
                 </div>
            </div>

        )
    }
}
