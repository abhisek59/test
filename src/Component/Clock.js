import React from 'react'
class Clock extends React.Component{
    constructor (){
        super()
        this.state={date: new Date}
    }
    componentDidMount(){
        this.timer= setInterval (         
            ()=> this.tick(),
            1000
        )


        }
     componentWillUnmount(){
            clearInterval(this.timer)
        }
    tick(){
this.setState({
    date:new Date()
}

)

    }
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <p>The time is {this.state.date.toLocaleTimeString()} </p>
            </div>
        )
        
    }
}
export default Clock
