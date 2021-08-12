import React from "react";

const Article = ({ articleTitle, articleBody }) => {
  return (
    <article>
      <h3>{articleTitle}</h3>
      <p>{articleBody}</p>
    </article>
  );
};
export default Article;
