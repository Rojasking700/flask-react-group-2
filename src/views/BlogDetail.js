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

                        <button type="button" className="btn btn-secondary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>   

                    </p>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago by {p.user}</small>
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
