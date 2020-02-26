import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage';


class EpisodeRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    let filteredPosts = posts;

    return (
      <div className="post-feed">
        {filteredPosts &&
          filteredPosts.map(({ node: post }) => (


            <article
              key={`post-${post.id}`}
              className="blog-post media"
            >
              <figure className="media-left">
                <Link className="post-thumbnail" to={post.fields.slug}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: `/img/frontendpodcast-logo.png`,
                      alt: `featured image thumbnail for post ${
                        post.title
                        }`,
                    }}
                  />
                </Link>
              </figure>

              <div className="media-content">
                <div className="post-meta">
                  <p className="subtitle is-size-6 is-block is-uppercase has-text-grey-light">
                    <time className="published" dateTime={post.frontmatter.date}>
                      <span className="has-text-primary">Episode / #{post.frontmatter.episodeNumber}</span>
                      <span style={{ float: 'right' }}>{post.frontmatter.date}</span>
                    </time>
                  </p>
                  <h2 className="post-title title is-size-4">
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                </div>
                <div className="post-content">
                  <p>
                    {
                      post.frontmatter.description ?
                        post.frontmatter.description
                        : post.excerpt
                    }
                  </p>
                  <p className="post-tags tags">
                    {
                      post.frontmatter.tags.map(tag => (
                        <Link
                          key={tag + `tag`}
                          to={`/tags/${kebabCase(tag)}/`}
                          className="tag">
                          #{tag}
                        </Link>
                      ))
                    }
                  </p>
                  <p className="read-more">
                    <Link
                      to={post.fields.slug}
                      className="button is-primary is-rounded is-small"
                    >
                      listen
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          ))}
      </div>
    )
  }
}

EpisodeRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default props => (
  <StaticQuery
    query={graphql`
      query EpisodeRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { 
            frontmatter: { 
              templateKey: { eq: "episode" },
              title: { regex: "/^((?!DRAFT).)*$/"  }
            } 
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                episodeNumber
                date(formatString: "DD MMMM, YYYY")
                tags
              }  
            }
          }
        }
      }
    `}
    render={(data, count) => <EpisodeRoll relatedTags={props.tags} excludePostId={props.excludePostId} data={data} count={count} />}
  />
);