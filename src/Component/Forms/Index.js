import React from "react";
 class Index extends React.Component{
    constructor(props){
        super(props)
        this.state={value:'', sec:'',first:'', vehicle:''}
    }
    handleChange=(e)=>{
        console.log(this.state.value)
        this.setState({ value:e.target.value})

    }
    handleCh=(e)=>{
        this.setState({sec:e.target.value})

    }
    handleSubmit=()=>{
        return(
        alert("Form Submitted"))

    }
    handleText=(e)=>{
        this.setState({first:e.target.value})
    }
    handleVehicles=(e)=>{
        this.setState({vehicle:e.target.value})
    }
    render(){

        return(
            <>
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text"  value={this.state.value} onChange={this.handleChange}/>
                    </label>
               
                <input type="text" value={this.state.sec}  onChange={this.handleCh}/>
                <br />
                <textarea value={this.state.first} onChange={this.handleText}></textarea>
                <button onClick={this.handleSubmit}>Submit</button> <br /> 
                <label>
                    Vehilcles:
                <select  value={this.state.vehicle} onChange={this.handleVehicles}>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                    <option value="Plane">Plane</option>
                    <option value="Cycle">Cycle</option>

                </select>
                </label>
                <input type="text" name="" id="" />
                </form>
            </div>
            </>
        )
    }
 }
 export default Index