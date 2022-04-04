import React from 'react'

const ReviewCard = () => {
  return (
    <>
      <div className="card">
        <div className="review-top-section">
          <div className="avatar">
            <a href="/u/garethmb">
              <img
                src="https://www.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg?s=64"
                alt="garethmb"
              />
            </a>
          </div>

          <div className="review-info">
            <h3>
              <a href="/review/6192a03b458199002a36d926">
                A review by garethmb
              </a>
            </h3>

            <h5>
              Written by <a href="/u/garethmb">garethmb</a> on November 15, 2021
            </h5>
          </div>
        </div>

        <div className="review-bottom-section">
          <p>
            In a magical area of Columbia surrounded by mountains; exists a
            magical town watched over by the Madrigal family. The family lives
            in a magical home that is the center point for the community and is
            loved by the community.
          </p>

          <p>
            In the new Disney film “Encanto”; audiences are told the story of
            how the family patriarch founded the community with a magical candle
            and how upon reaching a certain age; all members of her family
            receive a “gift” from the magical house which gives them an ability
            to help the community. From being able to heal with cooking to
            talking to the animals and super strength; the...
            <a className="underline" href="/review/6192a03b458199002a36d926">
              read the rest.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default ReviewCard