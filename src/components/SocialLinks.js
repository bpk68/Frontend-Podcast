import React from 'react';


const SocialLinks = props => {

    return (
        <p className="social-links">
            <a href="https://twitter.com/frontendpodcast" target="_blank" rel="noreferrer noopener">
                <span className="fab fa-twitter" aria-hidden="true"></span>
                <span className="screen-reader-text">Follow us on Twitter</span>
            </a>
            <a href="https://open.spotify.com/show/4GuAxptrtY8Es5iHwp09dT" target="_blank" rel="noreferrer noopener">
                <span className="fab fa-spotify" aria-hidden="true"></span>
                <span className="screen-reader-text">Listen on Spotify</span>
            </a>
            <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2IxMjNhNC9wb2RjYXN0L3Jzcw==" target="_blank" rel="noreferrer noopener">
                <span className="fab fa-google-play" aria-hidden="true"></span>
                <span className="screen-reader-text">Listen on Google Podcasts</span>
            </a>
            <a href="https://podcasts.apple.com/gb/podcast/the-front-end/id1499349107" target="_blank" rel="noreferrer noopener">
                <span className="fab fa-itunes" aria-hidden="true"></span>
                <span className="screen-reader-text">Listen on Apple Podcasts</span>
            </a>
            <a href="https://anchor.fm/the-front-end" target="_blank" rel="noreferrer noopener">
                <span className="fas fa-podcast" aria-hidden="true"></span>
                <span className="screen-reader-text">Listen to The Front End Podcast on Anchor</span>
            </a>
            <a href="https://thefrontendpodcast.site/rss.xml" target="_blank" rel="noreferrer noopener">
                <span className="fas fa-rss" aria-hidden="true"></span>
                <span className="screen-reader-text">Subscribe to the RSS feed</span>
            </a>
        </p>
    );
};

export default SocialLinks; 