import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Asdf extends Component {
  render() {
    return (
      <div>
        <h4>
            This is in a Class Component in this Page(Asdf)
        </h4>
        <Link to="/Qwer">HomePage</Link>
      </div>
    )
  }
}

export default Asdf
