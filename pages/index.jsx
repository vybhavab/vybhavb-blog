/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import '../styles/application.scss';
import fetch from 'isomorphic-unfetch';
import { resolve } from 'url';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default class Index extends React.Component {
  static async getInitialProps() {
    const fetchPosts = await fetch(resolve(process.env.baseURL, '/static/data/posts.json'));
    const { posts } = await fetchPosts.json();
    const fetchPages = await Promise.all(posts.map(post => fetch(resolve(process.env.baseURL, `/static/data/posts/${post}`))));
    const texts = await Promise.all(fetchPages.map(page => page.text()));
    const res = texts.map((text, index) => {
      const split = text.split('---');
      split.shift();
      const metadata = split.shift().trim();
      const content = split.join('---').trim();

      const post = {};
      post.content = content;
      [post.path] = posts[index].split('.');

      metadata.split('\n').forEach((line) => {
        const [attr, val] = line.split(':');
        post[attr.trim()] = val.trim();
      });

      return post;
    });

    // return an array of posts
    return {
      posts: res,
    };
  }

  render() {
    const { posts } = this.props;
    // console.log(posts);
    return (
      <div>
        <Navbar />
        <Hero
          title="Hello world!"
          subtitle="Welcome to the space where you can read about things I found interesting and "
          size="medium"
        />
        <div className="container">
          {posts.map((post, index) => (
            <div className="box" key={index}>
              <Link href={{ pathname: '/static/data/posts', query: { title: post.path } }} as={post.path} key={post.title}>
                <a>
                  <div>{post.title}</div>
                  <div>{post.subtitle}</div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
