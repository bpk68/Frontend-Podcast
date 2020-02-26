import React from 'react';
import { navigate } from 'gatsby-link';

import Layout from '../../components/Layout'
import ContactSnippet from '../../components/ContactSnippet';



function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class FrontEndPodcastPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="hero is-primary is-medium page-header">
                    <div className="hero-body has-text-centered">
                        <div className="container">
                            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet">
                                Contact us
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <p>If you'd like to ask questions about the show, send some feedback, or anything else, you can get in touch in a few different ways:</p>
                            <ul>
                                <li><a href="https://twitter.com/frontendpodcast">Find us on Twitter</a> and send us a DM</li>
                                <li>Shoot an email over to hello@thefrontendpodcast.site</li>
                                <li>Fill out the form below</li>
                            </ul>
                            <p>&nbsp;</p>
                            <ContactSnippet />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}