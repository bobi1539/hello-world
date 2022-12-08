import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "../Product/Product.css";
import axios from "axios";

class BlogPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: [],
            url: "http://localhost:3001/posts",
            formBlogPost: {
                userId: 1,
                id: 1,
                title: "",
                body: ""
            },
            isUpdate: false
        };
    }

    deleteValue = () => {
        this.setState({
            formBlogPost: {
                userId: 1,
                id: 1,
                title: "",
                body: ""
            }
        });
    }

    handleRemove = (id) => {
        const isDelete = window.confirm("are you sure to delete?");
        if(isDelete){
            axios.delete(this.state.url + "/" + id)
            .then((response) => {
                if(response.status == 200){
                    // alert("data berhasil di delete");
                    this.getListPost();
                }
            });
        }

    }

    getListPost = () => {
        axios.get(this.state.url + "?_sort=id&_order=desc")
        .then((response) => {
            this.setState({
                posts: response.data
            });
        });
    }

    postDataToAPI = () => {
        axios.post(this.state.url, this.state.formBlogPost)
            .then(() => {
                alert("Data berhasil di simpan");
                this.getListPost();
                this.deleteValue();
            }).catch((error) => {
                alert(error);
            })
    }

    putDataToApi = () => {
        axios.put(this.state.url + "/" + this.state.formBlogPost.id, this.state.formBlogPost)
            .then(() => {
                alert("Data berhasil di ubah");
                this.getListPost();
                this.deleteValue();
                this.setState({
                    isUpdate: false
                });
            })
    }

    handleSubmit = () => {
        let newFormBlogPost = {...this.state.formBlogPost};
        if(newFormBlogPost.title == "" || newFormBlogPost.body == ""){
            alert("title or body cannot be null");
        } else {
            if(this.state.isUpdate){
                this.putDataToApi();
            } else {
                let id = new Date().getTime();
                newFormBlogPost.id = id;
                this.setState({
                    formBlogPost: newFormBlogPost
                },() => {
                    this.postDataToAPI();
                });
            }
        }
    }

    handleChange = (event) =>{
        let newFormBlogPost = {...this.state.formBlogPost};
        newFormBlogPost[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: newFormBlogPost
        });
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             posts: json
        //         });
        //     });
        this.getListPost();
    }

    handleEdit = (data) => {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    }

    render() {
        return (
            <Fragment>
                <div className="card-wrapper">
                    <h2 className="text-title">Create Or Edit Post</h2>
                    <input name="title" value={this.state.formBlogPost.title} className="input-box" type="title" placeholder="title" onChange={this.handleChange}/>
                    <input name="body" value={this.state.formBlogPost.body} className="input-box" type="body" placeholder="body" onChange={this.handleChange} />
                    <button className="btn-submit" onClick={this.handleSubmit}>Submit</button>
                </div>

                <h2>Blog Post Component</h2>
                <hr />
                {
                    this.state.posts.map(post => {
                        return <Post 
                            key={post.id} 
                            data={post}
                            remove={this.handleRemove} 
                            edit={this.handleEdit} />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;