import React, { Component, Fragment } from 'react';
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props){
        super(props);
        console.log("constructor sidebar");
    }
    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    <nav>
                        <ul className="sidebar-ul">
                            <li className="sidebar-li">
                                <a href="/">Home</a>
                            </li>
                            <li className="sidebar-li">
                                <a href="/posts">Blog Post</a>
                            </li>
                            <li className="sidebar-li">
                                <a href="/product">Product</a>
                            </li>
                            <li className="sidebar-li">
                                <a href="/lifecycle">Lifecycle Component</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default Sidebar;