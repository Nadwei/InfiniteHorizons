import React from "react";
import Article from "../components/Article";
import articles from "../data/articleData_personalEnlightenment";

export default function PersonlEnlightenment() {
  // Get the first article
  const firstArticle = articles[0];

  return (
    <div id="philosophy-wrapper">
      <img id="philoSpiritImg" src={require('../staticImages/philoSpirit.jpg')} alt=""/>
      <div id="holistic_wellness_articles">
        <Article key={firstArticle.id} article={firstArticle} />
      </div>
    </div>
  );
}
