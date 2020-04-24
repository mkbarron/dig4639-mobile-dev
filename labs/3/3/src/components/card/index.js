import React, { Component } from "react";
import './index.css'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.content = this.props.content
  }

  render () {
    return <p className="card">{this.state.content}</p>;
  }
}

export default Card