import React, { Component } from 'react'

export default class Cookies extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <div className='cookies-container'>
        <p>
          This site uses cookies. By using this site, you agree to our <a href='#'>Privacy Policy</a> and <a href='#'>Terms of Service</a>.
        </p>
      </div>
    )
  }
}
