import React from 'react'

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temperature:''

        }
    }
    handleChange=(e)=>{
        this.props.onTemperatratureChange(e.target.value
        )

    }
    render(){
        return (
            <>
            <h1>Child</h1>
            <input type="text" value={this.props.temperature} onChange={this.handleChange} />
            </>
        )
    }
}
export default Child