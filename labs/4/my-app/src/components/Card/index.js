import React from 'react'
import './index.css'

class Card extends React.Component {
render() {
    return(
      <div className = "card">
      <h3>{this.props.title}</h3>
      <p>{this.props.content}</p>
      <button className="close" onClick={() => this.props.exitClick(this.props.id)}>Exit</button><br></br>
      </div>
    )
  }
}

export default Card;