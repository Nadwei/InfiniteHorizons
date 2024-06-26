import React from "react";

export default function HolisticWellnessArticle({ article }) {
  const handleError = (e) => {
    e.target.src = '';
    alert("we got a problem, chief!") // Handle image loading errors if needed
  };

  return (
    <div id={`article-${article.id}`}>
      <h2>{article.title}</h2>
      <h3>{article.date}</h3>
      <img className="articleHeaderImage" src={article.headerImage.src} alt={article.headerImage.alt} onError={handleError} />

      {article.content.map((section, index) => (
        <div key={index}>
          {section.type === "text" && (
            <>
              <h3>{section.subheading}</h3>
              {section.subparagraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </>
          )}

          {section.type === "image" && (
            <img className={section.className} src={section.src} alt={section.alt} onError={handleError} />
          )}
        </div>
      ))}
    </div>
  );
}
