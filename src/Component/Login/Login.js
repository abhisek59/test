import React from 'react'
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
          email:'',
          password:'',
          items:''
        }
    }

    componentDidMount(){
      const items = JSON.parse(localStorage.getItem('items'));
      this.setState({
        items:items
      })

      
      console.log(items)
    }

    handleChange=(e)=>{
      const name= e.target.name

      this.setState({
          [name]:e.target.value
      })
  }

    handleClick=()=>{
      const state = this.state;
      if( state.email === state.items.email && state.password === state.items.password){
        alert('Login successfull')
      }
      else{
        alert('SignUp again')
      }

    }


    render(){
        return(
            <>
            <div className="maindiv">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input className="hello" type="text" placeholder="email" name='email' value={this.state.email} onChange={this.handleChange} style={{ color: 'black' }}
 required />
        </div>
        <div className="input-box">
          <input className="hello" type="password" placeholder="Password" name='password' value={this.state.password}  onChange={this.handleChange} style={{ color: 'black' }}
 required />
        </div>
        <div className="remember">
          <label> <input type="checkbox" />Remember me</label>
        </div>
        <button type="submit" className="btn" onClick={this.handleClick}>Login</button>
      </form>
    </div>
            </>

        )
    }
}
export default Login