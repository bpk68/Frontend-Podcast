import React from 'react'

const AboutSnippet = props => (
    <div className="author-box box">
        <div className="media">
            <div className="media-left">
                <div className="author-avatar">
                    <img src="/img/podcast-icon.png" alt="Podcast microphone icon" className="avatar" />
                </div>
            </div>
            <div className="media-content content is-small">
                <h3 className="author-title">About The Front End</h3>
                <p className="author-description">
                    The Front End Podcast explores the in's and out's of life as a developer. Covering topics such as modern-day development, learning and professional growth, frameworks, tools, techniques, UX/UI, and careers.
                </p>
                <p>Created by <a href="https://robkendal.co.uk">Rob Kendal</a>, a UI developer from Yorkshire.</p>
            </div>
        </div>
    </div>
);

export default AboutSnippet