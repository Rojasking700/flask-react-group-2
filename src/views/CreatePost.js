import React, { Component } from 'react'

export default class CreatePost extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }
    async createPost(e){
        e.preventDefault();
        let token = await this.props.getToken()
        let res = await fetch(`http://localhost:5000/blog/createpost`,{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token['token'],
                'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                "title": e.target.title.value,
                "image": e.target.image.value,
                "content": e.target.content.value
            })
        })
        let newPost = await res.json();
        this.setState({redirect: `/blog/${newPost.post_id}`})
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h2>Create a Post</h2>
                </div>
                
                <form onSubmit={(e) => this.createPost(e)}>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Add Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Add Image</label>
                    <input type="text" className="form-control" name="image" placeholder="Image" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Add Content</label>
                    <input type="text" className="form-control" name="content" placeholder="Content" />
                </div>
                    <button type="submit" className=" btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
