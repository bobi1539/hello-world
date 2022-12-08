import React from 'react';
import "../../container/Product/Product.css";

const Post = (props) => {
    return (
        <div className="card-wrapper">
            <div className="img">
                <img src="http://placeimg.com/200/100/tech" alt="" />
            </div>
            <div className="content">
                <h5>{props.data.title}</h5>
                <p>{props.data.body}</p>
                <button className="btn-delete" onClick={() => props.remove(props.data.id)}>delete</button>
                <button className="btn-edit" onClick={() => props.edit(props.data)}>edit</button>
            </div>
        </div>
    );
}

export default Post;