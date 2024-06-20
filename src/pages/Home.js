import React from "react";
import Article from "../components/Article";
import  articles  from "../data/articleData";

export default function Home() {
   return (
     <div id="home-wrapper">
       <img id="home-img" src={require('../staticImages/home.jpg')} />
       <div id="home-grid">
         {articles.map((article, index) => (
            article.title && article.date && article.body && article.headerImage && article.bodyImages.length > 0 ?
           <div className={`grid-item ${index + 1}`} key={index + 1}>
             <Article article={{...article, id: index + 1}} />
           </div>
           : null
         ))}
       </div>
     </div>
   );
 }