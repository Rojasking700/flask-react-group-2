import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Comments extends Component {
    render() {
        const c = this.props.comments;
        return (
            <div>
                <div className="card">
                <div className="card-header">Comment</div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>
                        {c.content}
                        
                    </p>
                    <footer className="blockquote-footer">
                        {c.user}
                    </footer>
                    </blockquote>
                </div>
                </div>                
            </div>
        )
    }
}
