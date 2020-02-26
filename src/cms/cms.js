import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview';
import EpisodePostPreview from './preview-templates/EpisodePostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('episode', EpisodePostPreview)
