import React, {Component, Fragment} from "react";
import "../Product/Product.css";

class CardProduct extends Component{
    state = {
        order: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        });
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            });
        }
    }

    render(){
        return (
            <Fragment>
                <div className="card-wrapper">
                    <h5>Product</h5>
                    <button className="mr" onClick={this.handleMinus}>kurang</button>
                    <input className="mr counter" type="text" value={this.state.order} readOnly />
                    <button className="mr" onClick={this.handlePlus}>tambah</button>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;