import React from "react";

export default function Article({ article }) {
  const handleError = (e) => {
    e.target.src = '';
  };

  return (
    <div id={`article-${article.id}`}>
      <img src={article.headerImage.src} alt={article.title} onError={handleError} />
      <h2>{article.title}</h2>
      <p>{article.date}</p>
      {Object.values(article.paragraphs).map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {article.bodyImages.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} onError={handleError} />
      ))}
    </div>
  );
}
