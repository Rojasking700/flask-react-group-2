import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
    render() {
        const p = this.props.blog;
        return (
            <div>
                {/* <div className="card">
                    <div className="card-header"><h4>{p.title}</h4></div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>
                            {p.content}
                        </p>
                        <Link to={`/blog/${p.post_id}`}>
                            <button  href="/" className="btn btn-secondary float-end">More Info</button>
                            </Link>
                        <footer className="blockquote-footer">
                             {p.user} 
                        </footer>
                        </blockquote>
                    </div>
                </div> */}

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
                    <Link to={`/blogdetail/${p.id}`}>
                        <button  href="/" className="btn btn-secondary float-end">More Info</button>
                    </Link>
                    </p>
                </div>
                </div>
                              
            </div>
        )
    }
}
