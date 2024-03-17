import React from "react";
class Register extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="maindiv">
            <form action="">
              <h1>Register</h1>
              <div className="input-box">
              <input className="hello" type="text" placeholder="FirstName" style={{ color: 'black' }}
       required />

                <input className="hello mt-5=2" type="text" placeholder="lastName" style={{ color: 'black' }}
       required />
        <input className="hello " type="text" placeholder="Username" style={{ color: 'black' }}
       required />
              </div>
              <div className="input-box ">
                <input className="hello" type="password" placeholder="Password" style={{ color: 'black' }}
       required />
              </div>
              <div className="remember">
                <label> <input type="checkbox" />Remember me</label>
              </div>
             
              <div className="register-link">
                <p>
                  Don't have an account ?
                 <button className='mx-3 border-light '>Register</button>
                </p>
              </div>
            </form>
          </div>
        )
    }
}
export default Register