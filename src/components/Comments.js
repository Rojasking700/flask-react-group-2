import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Comments extends Component {
    render() {
        const c = this.props.comments;
        return (
            <div>
                <div class="card">
                <div class="card-header">Comment</div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                    <p>
                        {c.content}
                        
                    </p>
                    <footer class="blockquote-footer">
                        {c.user}
                    </footer>
                    </blockquote>
                </div>
                </div>                
            </div>
        )
    }
}
