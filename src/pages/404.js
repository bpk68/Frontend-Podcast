import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <h1>404; NO PAGE HERE</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <p>But don't worry, you still have options:</p>
              <ul>
                <li>Go <a href="#previous-page" onClick={() => window.location = document.referrer}>back to the previous page</a></li>
                <li><a href="/">Visit the home page</a> or,</li>
                <li>Listen to some more <a href="/episodes">lovely episodes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
