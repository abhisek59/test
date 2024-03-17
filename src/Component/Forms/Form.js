import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            address:'',
            contact:null,
            email:"",
            citizen:'5'

        }
    }
    handleChange =(e)=>{

        const name = e.target.name

        this.setState({
            [name]:e.target.value
        })
    }
    
    render(){
        return(
            <>
            <div>
                <label> FirstName :</label>
                <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
            </div> <br /><div>
                <label> Lastname :</label>
                <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
            </div> <br /><div>
                <label> Adddress :</label>
                <input name="address" type="text" value={this.state.address} onChange={this.handleChange} />
            </div> <br /><div>
                <label> Contact :</label>
                <input name="contact" type="number" value={this.state.contact} onChange={this.handleChange} />
            </div> <br /><div>
                <label> Email :</label>
                <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </div> <br /><div>
                <label> citizen</label>
                <input name="citizen" type="number" value={this.state.citizen} onChange={this.handleChange} />
            </div>
            <input type="file" />
            
            
            </>
        )
    }
}
export default Form