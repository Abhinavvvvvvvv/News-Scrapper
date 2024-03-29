import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="-blank" className="btn btn-dark">
            {" "}
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
