import React from "react";

export default function HolisticWellnessArticle({ article }) {
  const handleError = (e) => {
    e.target.src = '';
    alert("we got a problem, chief!"); // Handle image loading errors if needed
  };

  const renderParagraph = (paragraph) => {
    if (paragraph.includes("Medium")) {
      return (
        <p key={paragraph}>
          {paragraph.split("Medium")[0]}
          <a href="https://medium.com/cum-grano-salis/the-self-authoring-suite-210846b4a682" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          {paragraph.split("Medium")[1]}
        </p>
      );
    } else if (paragraph.includes("life authoring")) {
      return (
        <p key={paragraph}>
          {paragraph.split("life authoring")[0]}
          <a href="https://selfauthoring.com/" target="_blank" rel="noopener noreferrer">
            life authoring
          </a>
          {paragraph.split("life authoring")[1]}
        </p>
      );
    }
    return <p key={paragraph}>{paragraph}</p>;
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
                renderParagraph(paragraph, pIndex)
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
