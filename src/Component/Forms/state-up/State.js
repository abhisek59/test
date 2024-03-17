import React from "react";
import Child from "./Child";

class State extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temperature:''
        }
    }
    handleChange=(temp)=>{
        this.setState({
            temperature:temp

        })
    }
    render(){
        return(
            <>
            <h1>
                Parent
            </h1>
            <p>{this.state.temperature}</p>
            <Child temperature={this.state.temperature} onTemperatratureChange={this.handleChange}/>

            </>
        )
    }

}
export default State