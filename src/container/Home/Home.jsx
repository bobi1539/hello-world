import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
    render() {
        return (
            <div>
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
                <Product/>
            </div>
        );
    }
}

export default Home;