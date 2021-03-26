import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
    render() {
        const p = this.props.blog;
        return (
            <div>
                <div className="card mb-3">
                <img
                    src="https://mdbootstrap.com/img/new/slides/041.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">
                    {p.content}
                    </p>
                    <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago by {p.user}</small>
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
