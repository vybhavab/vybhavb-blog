// import { resolve } from 'url';

// import { withSass } from '@zeit/next-sass';

const fetch = require('isomorphic-unfetch');
const withSass = require('@zeit/next-sass');
const url = require('url');

const dev = process.env.NODE_ENV !== 'production';

// process.env.baseURL = `${process.env.REPOSITORY_URL}/tree/${process.env.COMMIT_REF}`;


module.exports = withSass({
  async exportPathMap() {
    const response = await fetch(`${process.env.baseURL}/static/data/posts.json`);
    console.log(response);
    const { posts } = await response.json();
    const pages = posts.reduce(
      (pages, post) => Object.assign({}, pages, {
        [`/${post.id}`]: {
          page: '/post',
          query: { title: post.id },
        },
      }),
      {},
    );

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' },
    });
  },
});
