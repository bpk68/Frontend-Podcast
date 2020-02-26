import React from 'react'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <section className="hero is-primary is-medium page-header">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet">
            Thanks!
          </h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h2>Who's awesome? You're awesome!</h2>
              <p>Thanks for getting in touch, we'll get back to you within 24hrs</p>
              <p>In true 'choose your own adventure' style, you can choose where to go next:</p>
              <ul>
                <li>Go <a href="#previous-page" onClick={() => window.location = document.referrer}>back to the previous page</a></li>
                <li><a href="/">Visit the home page</a> or,</li>
                <li>Listen to some more <a href="/episodes">lovely podcast episodes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
