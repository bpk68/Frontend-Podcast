import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import AboutSnippet from '../components/AboutSnippet';


export const EpisodePostTemplate = ({
  postId,
  slug,
  content,
  contentComponent,
  description,
  episodeNumber,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">

            <article className="blog-article">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                Episode #{episodeNumber} - {title}
              </h1>
              <p>{description}</p>
              <PostContent content={content} />

              <footer className="post-footer columns">
                <div className="column">
                  {tags && tags.length ? (
                    <p className="post-tags tags">
                      {
                        tags.map(tag => (
                          <Link
                            key={tag + `tag`}
                            to={`/tags/${kebabCase(tag)}/`}
                            className="tag is-white has-text-primary is-rounded">
                            #{tag}
                          </Link>
                        ))
                      }
                    </p>
                  ) : null}
                </div>

                <div className="column content is-small">
                  <p className="post-share">
                    <span className="post-share-title"><strong>Share: </strong></span>
                    <a target="_blank" href={`https://twitter.com/intent/tweet?text=${title}&amp;url=https://thefrontendpodcast.site${slug}`} rel="noopener noreferrer">Twitter</a>
                    <a target="_blank" href={`https://www.facebook.com/sharer.php?u=https://thefrontendpodcast.site${slug}`} rel="noopener noreferrer">Facebook</a>
                    <a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://thefrontendpodcast.site${slug}&amp;title=${title}&amp;source="The Front End Podcast"`} rel="noopener noreferrer">LinkedIn</a>
                  </p>
                </div>
              </footer>
            </article>

            <hr />
            <AboutSnippet />

          </div>
        </div>
      </div>
    </section>
  )
}

EpisodePostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const EpisodePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EpisodePostTemplate
        postId={post.id}
        slug={post.fields.slug}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        episodeNumber={post.frontmatter.episodeNumber}
        helmet={
          <Helmet titleTemplate="%s | The Front End Podcast">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />

            <meta property="og:title" content={post.frontmatter.title} />
            <meta property="og:description" content={post.frontmatter.description} />
            <meta property="og:url" content={`https://thefrontendpodcast.site${post.fields.slug}`} />
            <meta property="og:image" content="https://thefrontendpodcast.site/img/frontendpodcast-logo.png" />

            <meta property="article:published_time" content="2019-04-01T08:41:19.000Z" />

            {post.frontmatter.tags.map(tag => (
              <meta key={tag + `tag`} property="article:tag" content={tag} />
            ))}

            <meta name="twitter:title" content={post.frontmatter.title} />
            <meta name="twitter:description" content={post.frontmatter.description} />
            <meta name="twitter:url" content={`https://thefrontendpodcast.site${post.fields.slug}`} />

            <meta name="twitter:label2" content="Filed under" />
            <meta
              name="twitter:data2"
              content={
                post.frontmatter.tags.map(tag => (
                  `${tag},`
                )
                )
              }
            />

          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

EpisodePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EpisodePost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        description
        episodeNumber
        tags
      }
    }
  }
`
