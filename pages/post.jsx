import React from 'react';
import '../styles/application.scss';
import ReactMarkdown from 'react-markdown/with-html';
import fetch from 'isomorphic-unfetch';
import { resolve } from 'url';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import CodeBlock from '../components/CodeBlock';

export default class Post extends React.Component {
  static async getInitialProps({ query }) {
    const postTitle = query.title;
    const getPage = await fetch(resolve(process.env.baseURL, `/static/data/posts/${postTitle}.md`));
    const text = await getPage.text();
    const split = text.split('---');
    split.shift();
    const metadata = split.shift().trim();
    const content = split.join('---').trim();
    const post = {};
    post.content = content;
    metadata.split('\n').forEach((line) => {
      const [attr, val] = line.split(':');
      post[attr.trim()] = val.trim();
    });
    return { post };
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Navbar />
        <Hero
          title={post.title}
          subtitle={`${post.subtitle} | ${post.date}`}
          size="medium"
        />
        <div className="container content">
          <ReactMarkdown source={post.content} renderers={{ code: CodeBlock }} escapeHtml={false} />
        </div>
      </div>
    );
  }
}
