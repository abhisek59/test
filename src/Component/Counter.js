import React  from "react";
import Navbar from "./Navbar";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0 
        };
    }
    increaseCounter = () => {
        if (this.state.counter <15) {
            console.log(this.state.counter)
          this.setState({ counter: this.state.counter + 1 });
        } else {
          this.setState({ counter: this.state.counter});
        }
      };

    decreseCounter = () => {
        if(this.state.counter > 0){
        this.setState({ counter: this.state.counter - 1 });
        }else{
            this.setState({ counter: this.state.counter}); 
        }
    };

    resetCounter = () => {
        this.setState({ counter: 0 });
    };
    muntiplyNum =()=>{
    this.setState({counter:this.state.counter*2})
    }
      divideNum =()=>{
    this.setState({counter:this.state.counter/2})
    }
   

    render() {
        return (
            <div className=" container  ">
                <h1>Counter</h1>
                <div className="button">
                    <h3>{this.state.counter}</h3>
                    <div className="d-flex">
                    <button className=" btn btn-primary mx-4 " onClick={this.increaseCounter}>
                        Increment
                    </button>
                    <button className="btn btn-primary mx-4" onClick={this.decreseCounter}>
                        Decrement
                    </button>
                    <button className=" btn btn-primary mx-4" onClick={this.resetCounter}>
                        Reset
                    </button>
                     <button className=" btn btn-primary mx-4" onClick={this.muntiplyNum}>
                        Muntiply 
                    </button>
                     <button className=" btn btn-primary mx-4" onClick={this.divideNum}>
                        Divide
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
