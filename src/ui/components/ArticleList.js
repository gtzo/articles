import React from 'react';
import PropTypes from 'prop-types';
import ArticleLink from './ArticleLink';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: this.props.articles
    };
  }

  _createArticleElements(articles) {
    const articleElements = [];
    for (let i = 0; i < articles.length; i++) {
        const articleElement = (
            <ArticleLink 
              key={i} 
              article={articles[i]}
            />);
        articleElements.push(articleElement);
    }
    return articleElements;
  }

  render() {
    return (
      <div>
        {this._createArticleElements(this.props.articles)}     
      </div>
    );
  }
}

ArticleList.PropTypes = {
  articles: PropTypes.array
};
