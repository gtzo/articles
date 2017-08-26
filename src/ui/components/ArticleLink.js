import React from 'react';
import PropTypes from 'prop-types';

export default class ArticleLink extends React.Component {
  render() {
    const name = this.props.article.name;
    return (<p>{name}</p>);
  }
}

ArticleLink.PropTypes = {
  article: PropTypes.object.isRequired
}
