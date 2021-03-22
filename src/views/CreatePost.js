import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class CreatePost extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null
        }
    }

    async createPost(e){
        e.preventDefault()
        let token = await this.props.get_token()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer pvZAbRiD8cuJ5+b0tS+VwxZDfpNfl4Os");
        myHeaders.append("Content-Type", "application/json")
        let res = await fetch('http://localhost:5000/blog/createpost', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "title": e.target.title.value,
                "content": e.target.content.value
            })
        })
        let newPost = await res.json();
        this.setState({ redirect: `/blog/${newPost.id}`})

    }
    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container no-padding">
                <h1 className="h1">Intellectual Property Welcome!</h1>
                <h4 className="h4">Rules:</h4>
                <ol>
                    <li>Have Fun</li>
                    <li>Be Yourself</li>
                </ol>
                <form onSubmit={(e) => this.createPost(e)}>
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                    <br></br>
                    <textarea type="text" className="form-control" rows={8} cols={50} name='message' placeholder='do it for the culture'  />
                    <br></br>
                    <button type="submit" className="btn">Submit</button>
                    <br></br>
                </form>
            </div>
        )
    }
}