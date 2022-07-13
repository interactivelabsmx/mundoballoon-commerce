export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const GRAPHQL_URL = 'https://localhost:5001/graphql/';

const GRAPHQL_URL_NO_TLS = 'http://localhost:5000/graphql/';

export const getGraphqlURL = () =>
  process.env.GRAPHQL_URL || process.env.USE_TLS
    ? GRAPHQL_URL
    : GRAPHQL_URL_NO_TLS;

export const SelectOne = { label: 'Select One', value: '' };

export const PAGING_QUERY_DEFAULT = { first: 5, after: null };

// MIME types
// .mp4	MP4 video	video/mp4
// .mpeg	MPEG Video	video/mpeg
// .webm	WEBM video	video/webm

// .jpeg .jpg	JPEG images	image/jpeg
// .png	Portable Network Graphics	image/png
// .webp	WEBP image	image/webp
