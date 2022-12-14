import React, {Component, Fragment} from "react";

class LifeCycleComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1
        };

        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("derived state from props");
        return null;
    }

    componentDidMount(){
        console.log("component did mount");
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     });
        // }, 3000);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group("should component update");
        // console.log("next props : ", nextProps);
        console.log("next state : ", nextState);
        console.log("this state : ", this.state);
        console.groupEnd();

        if(nextState.count >= 4){
            return false;
        }

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("get snapshot before update");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        console.log("render");
        return (
            <Fragment>
                <br />
                <button onClick={this.changeCount}>Life Cycle Component Button {this.state.count}</button>
            </Fragment>
        );
    }
}

export default LifeCycleComp;