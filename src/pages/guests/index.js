import React from 'react';
import { navigate } from 'gatsby-link';

import Layout from '../../components/Layout'
import GuestSnippet from '../../components/GuestSnippet';



function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class FrontEndPodcastPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="hero is-primary is-medium page-header has-text-dark">
                    <div className="hero-body has-text-centered">
                        <div className="container">
                            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet">
                                Feature as a guest
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h2>Can I be featured in an episode?</h2>
                            <p>Of course you can, the more the merrier! Fill in the quick form below and we'll be in touch to arrange a time to record the show.</p>
                            <p>If you'd like to know more about the show's format and what you'll be asked, you can read <a href="/faq">The Front End Podcast FAQ</a>
                                where all the answers will be revealed.</p>
                            <h2>What topics are you looking for guests to discuss?</h2>
                            <p>In short, a variety. We've got a host of topics and ideas lined up, but if you can talk about any of the following areas that would be ace:</p>
                            <ul>
                                <li>Unit and visual testing</li>
                                <li>Accessibility</li>
                                <li>CSS and preprocessors</li>
                                <li>Design systems, wireframing and UX</li>
                                <li>Getting hired as a developer</li>
                                <li>Productivity</li>
                                <li>Blogging and writing technical tutorials</li>
                                <li>Tools, tips and tricks</li>
                                <li>Problem solving and debugging</li>
                                <li>Development languages</li>
                                <li>Developer origin stories</li>
                                <li>JavaScript frameworks</li>
                                <li>Freelancing and starting your own business</li>
                                <li>Reddit-style AMA posts (ask me anything)</li>
                                <li>Discussions with a wealth of diverse guests</li>
                                <li>...and more</li>
                            </ul>
                            <p>&nbsp;</p>
                            <GuestSnippet />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}