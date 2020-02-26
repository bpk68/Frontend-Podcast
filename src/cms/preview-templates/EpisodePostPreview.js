import React from 'react'
import PropTypes from 'prop-types'
import { EpisodePostTemplate } from '../../templates/episode'

const EpisodePostPreview = ({ entry, widgetFor }) => (
  <EpisodePostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EpisodePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EpisodePostPreview
