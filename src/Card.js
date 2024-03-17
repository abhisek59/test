import React from 'react'

class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.card.Name)
        return (
            <>
            <h1>Name:{this.props.card.Name}</h1>
            <h2>Invented:{this.props.card.invention}</h2>
            <h3>Made in nepal:{this.props.card.Nepali}</h3>
            </>
        )
    }
}
export default Card