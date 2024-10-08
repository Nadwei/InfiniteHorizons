import React, { useState, useEffect } from 'react';
import personalEnlightenmentArticles from '../data/articles/personal-enlightenment/article1';
import holisticArticles from '../data/articles/holistic-wellness/article1';
import homeImage from '../assets/images/home.jpg';

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const combinedArticles = [...personalEnlightenmentArticles, ...holisticArticles];
    combinedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticles(combinedArticles);
  }, []);

  const renderArticleComponent = (article) => {
    if (personalEnlightenmentArticles.includes(article)) {
      const ArticlePersonalEnlightenment = require('../components/articles/personal-enlightenment/Article_1').default;
      return <ArticlePersonalEnlightenment key={article.id} article={article} />;
    } else if (holisticArticles.includes(article)) {
      const ArticleHolisticWellness = require('../components/articles/holistic-wellness/Article_1').default;
      return <ArticleHolisticWellness key={article.id} article={article} />;
    }
    return null;
  };

  return (
    <div id="home-wrapper">
      <img id="home-img" src={homeImage} alt="Home" />
      <div>
      <h3>Announcements </h3> 
      <p>This site is undergoing reconstrution, and many things may be missing or functioning strangely, like menus and so on. Please be patient with us! </p>
      </div>
      <h1 id="home-heading">What's New?</h1>
      <div id="home-grid">
        {articles.map(article => renderArticleComponent(article))}
      </div>
    </div>
  );
};