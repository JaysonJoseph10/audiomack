import React, { Component } from 'react'

export default class Top extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <section id='top'>
        <div className='image-container'>
        </div>
        <h1>Audiomack is here to move music forward</h1>
        <p>Audiomack offers <span className='emphasized-keyworks'>free</span>, unlimited storage and RSS feeds to power your podcast</p>
        <div className='get-app'>
          <a href='#' className='app-store store-btn'></a>
          <a href='#' className='google-play store-btn'></a>
          <a href='#' className='text-the-app store-btn'></a>
        </div>
        <h2>Explore features for:</h2>
        <div className='feature-links'>
          <span className='feature-tab artists'>Artists</span>
          <span className='feature-tab listeners'>Listeners</span>
          <span className='feature-tab labels'>Labels</span>
          <span className='feature-tab podcasts'>Podcasts</span>
        </div>
      </section>
    )
  }
}
