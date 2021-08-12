import React, { Fragment } from "react";
import Article from "./Article";

const AllArticles = ({ articles }) => {
  let copyArticles = articles.map((article, index) => {
    return (
      <Article
        articleTitle={article.articleTitle}
        articleBody={article.articleBody}
        key={index}
      />
    );
  });
  return <Fragment> {copyArticles}</Fragment>;
};

export default AllArticles;
