import React, { Component } from 'react';
import './App.css';
import ArticleList from './ui/components/ArticleList';
import TestArticles from './test-data/TestArticles.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={TestArticles}/>
      </div>
    );
  }
}

export default App;
