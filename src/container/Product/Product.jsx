import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

class Product extends Component{
    state = {
        order: 0
    }
    
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        });
    }

    render(){
        return (
            <Fragment>
                <h1>BUAT STATE DI COMPONENT (STATELESS) BESOK</h1>
                <div className="header">
                    <h5>Header</h5>    
                    <p>{this.state.order}</p>
                </div>
                <CardProduct onCounterChange={(newValue) => this.handleCounterChange(newValue)} />
            </Fragment>
        )
    }
}

export default Product;