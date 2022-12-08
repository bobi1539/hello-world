import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";
import "./Home.css";

class Home extends Component {

    state = {
        showComponent: true
    };

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent:false
        //     })
        // }, 10000);
    }

    render() {
        return (
            <div className="container">
                {/* <YoutubeComp
                    thumbnail="thumbnail 1"
                    title="title 1" 
                    description="1"/>
                <YoutubeComp
                    thumbnail="thumbnail 2"
                    title="title 2" 
                    description="2"/>
                <YoutubeComp
                    thumbnail="thumbnail 3"
                    title="title 3" 
                    description="3"/>
                <YoutubeComp
                    thumbnail="thumbnail 4"
                    title="title 4" 
                    description="1"/>
                <YoutubeComp /> */}
                {/* <Product/> */}

                <h2>Life Cycle Component</h2>
                <hr />
                {
                    this.state.showComponent ? <LifeCycleComp /> : null
                }
            </div>
        );
    }
}

export default Home;