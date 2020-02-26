import React from 'react'

import Layout from '../../components/Layout'
import EpisodeRoll from '../../components/EpisodeRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="hero is-primary is-medium has-text-dark page-header" >
          <div className="hero-body has-text-centered">
            <div className="container">
              <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet">
                Latest episodes
              </h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <EpisodeRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
