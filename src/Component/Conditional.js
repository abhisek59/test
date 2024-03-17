import React from "react";
import Login from "./Login/Login";
import Register from "./Login/Register";

class Conditional extends React.Component{
    constructor(props){
        super(props)
        this.state={isLoggedIn:true}
    }

     handleClick = ()=>{
        this.setState((prevState)=>({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        return(
            <>
            {
                isLoggedIn ?<Login/> : <Register/>
            }
            <button onClick={this.handleClick}>
                {isLoggedIn ? 'Logout':'Login'}
            </button>
            </>

        )
    }
}
export default Conditional
