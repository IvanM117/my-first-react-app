/*
1. ABSTRAER el objeto POST de un blog
2. Crear un JSON con varios objetos POST
3. Crear un componente que renderize esos POST's a modo de Cards (como un blog)
4. Añadir un formulario a ese componente para poder añadir POST
Por cierto, los entregables tienen que tener una UI presentable (CSS bonito)
*/
import React, { Component } from "react";
import CustomInput from "../CustomInput";

import "./JsonPost.css"

const POSTS_JSON = [
    {
        author: "Emma Bostian",
        title: "De-Coding front end Development",
        date: "11/08/2019",
        timeRead:"12 min",
        Description: "In this simple tutorial, we shall create a simple REST API to create a user",
        image: "https://picsum.photos/200",
    },
    {
        author: "Frank Atucuntan",
        title: "Front end Development Interview Process",
        date: "21/04/2019",
        timeRead:"7 min",
        description: "MongoDB database locally in this tutorial",
        image: "https://i.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ",
    },
      
]

class JsonPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            postAuthor:"",
            postTitle:"",
            postDate:"",
            postTimeRead:"",
            postDescription:"",
            postImage: "",
        };

        this.handlerNewPostChange = this.handleNewPostChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let postInMemory = localStorage.getItem("posts")
        if (postInMemory){
            this.setState({
                posts: JSON.parse(postInMemory),
            });
        } else {
            setTimeout(() => {
                localStorage.setItem("posts",JSON.stringify(POSTS_JSON));
                this.setState({
                    posts: POSTS_JSON,
                });
            })
        }
        
    }

    renderPosts() {
        return this.state.posts.map(({ author, title, date, timeRead, description, image }) => {
            return (
                <div className="postContainer">
                    <img src={image} alt={image}/>
                    <p>{author}</p>
                    <h2>{title}</h2>
                    <p>{date} . {timeRead}</p>
                </div>
            )
        });
    }

    handleNewPostChange(name, value){
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let { posts, postAuthor , postTitle, postDate, postTimeRead, postDescription,  postImage } = this.state
        const newPost = {
            author: postAuthor,
            title: postTitle,
            date: postDate,
            timeRead: postTimeRead,
            description: postDescription,
            image: postImage,
        };
        let postInMemory = JSON.parse(localStorage.getItem("posts"));
        postInMemory.push(newPost);
        localStorage.setItem("posts", JSON.stringify(postInMemory));
        posts.push(newPost);
        this.setState({
            posts,
            postAuthor: "",
            postTitle:"",
            postDate:"",
            postTimeRead:"",
            postDescription:"",
            postImage:"",
        })
    }

    render(){
        const { posts,postAuthor, postTitle, postDate, postTimeRead, postDescription, postImage } = this.state;
        return(
            <div>
                {posts.length ? (
                    <ul>{this.renderPosts()}</ul>
                ) : (
                    <h1>No hay Posts</h1>
                )}
                <form onSubmit={this.handleSubmit}>
                    Author:{" "}
                    <CustomInput
                    type="text"
                    value={postAuthor}
                    name="postAuthor"
                    callback={this.handlerNewPostChange}
                    />
                    Title:{" "}
                    <CustomInput 
                    type="text"
                    value={postTitle}
                    name="postTitle"
                    callback={this.handlerNewPostChange}
                    />
                    Date:{" "}
                    <CustomInput 
                    type="text"
                    value={postDate}
                    name="postDate"
                    callback={this.handlerNewPostChange}
                    />
                    ReadTime:{" "}
                    <CustomInput 
                    type="text"
                    value={postTimeRead}
                    name="postTimeRead"
                    callback={this.handlerNewPostChange}
                    />
                     Description:{" "}
                    <CustomInput 
                    type="text"
                    value={postDescription}
                    name="postDescription"
                    callback={this.handlerNewPostChange}
                    />
                     Image:{" "}
                    <CustomInput 
                    type="text"
                    value={postImage}
                    name="postImage"
                    callback={this.handlerNewPostChange}
                    />
                    <button type="submit">Crear Post</button>
                </form>
            </div>
        )
    }
}

export default JsonPost;