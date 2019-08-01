import React, { Component } from 'react'
import Header from './Header.js'
import Cookies from './Cookies.js'
import Top from './Top.js'

export default class App extends Component {
    render(){
      return (
        <div>
          <Cookies />
          <Header />
          <Top />
        </div>
    )
  }
}
