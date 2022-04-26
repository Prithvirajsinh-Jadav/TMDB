import React from "react";

const ReviewCard = ({
  author,
  authorImage,
  rating,
  userLink,
  created_at,
  content,
  url,
}) => {
  return (
    <>
      <div className="card mb-4" key={author}>
        <div className="review-top-section">
          <div className="avatar">
            <span>
              <img className="bg-grey" src={authorImage} alt={author} />
            </span>
          </div>

          <div className="review-info">
            <h3 className="d-flex">
              <a href={userLink} target="_blank" rel="noreferrer">
                A review by {author}
              </a>
              {rating && (
                <div className="rating ms-2">
                  <span className="star"></span>
                  {rating.toFixed(1)}
                </div>
              )}
            </h3>

            <h5>
              Written by
              <a href={userLink} target="_blank" rel="noreferrer">
                {author}
              </a>
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
                <a className="underline" target="_blank" rel="noreferrer" href={url}>
                  read the rest.
                </a>
              </>
            )}
          </pre>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
