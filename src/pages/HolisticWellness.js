import React from "react";
import HolisticWellnessArticle from "../components/HolisticWellnessArticle" // Make sure to import the HolisticWellnessArticle component
import holisticArticle from "../data/articleData_holisticWellness";

export default function HolisticWellness() {
    return(
        <div>
            <img id="mindBodyImg" src={require('../staticImages/mindBody.jpg')} alt="" />
            <div id="holistic_wellness_articles">
                {holisticArticle.map((article) => (
                    <HolisticWellnessArticle key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}
