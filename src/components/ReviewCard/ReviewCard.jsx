import React from "react";
import { Anchor } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReviewCard = ({ author,authorImage,rating,userLink,created_at,content,url }) => {
  
  return (
    <>
      <div className="card mb-4" key={author}>
        <div className="review-top-section">
          <div className="avatar">
            <Link to="/">
              <img src={authorImage} alt={author} />
            </Link>
          </div>

          <div className="review-info">
            <h3 className="d-flex">
              <Link to={userLink}>A review by {author}</Link>
              {rating && (
                <div className="rating ms-2">
                  <span className="star"></span>
                  {rating.toFixed(1)}
                </div>
              )}
            </h3>

            <h5>
              Written by
              <Link
                to={userLink}
              >
                {author}
              </Link>
              on &nbsp;
              {new Date(created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </h5>
          </div>
        </div>

        <div className="review-bottom-section">
          <pre>
            {content.slice(0, 600)}
            {content.length > 600 && (
              <>
                ...
                <Anchor
                  className="underline"
                  target="_blank"
                  href={url}
                >
                  read the rest.
                </Anchor>
              </>
            )}
          </pre>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
