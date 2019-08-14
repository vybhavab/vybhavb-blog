import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log(query.title);
    const content = await require(`../static/data/posts/${query.title}.md`);
    console.log(content);
    return { content };
  }

  render() {
    const post = this.props.content;
    return (
        <ReactMarkdown source={post.default} />
    );
  }
}
