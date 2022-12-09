import React, { Component, Fragment } from 'react';
import BlogPost from "../BlogPost/BlogPost";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";
import "./Container.css";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";

class Container extends Component {
    // state = {  } 
    router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/posts",
            element: <BlogPost />
        },
        {
            path: "/product",
            element: <Product />
        },
        {
            path: "/lifecycle",
            element: <LifeCycleComp />
        }
    ]);

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Sidebar/>
                    <RouterProvider router={this.router} />
                </div>
            </Fragment>
        );
    }
}

export default Container;
