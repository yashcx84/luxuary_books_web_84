import React from 'react';

// Star component representing a single star
const Star = ({ filled, isMobile }) => {
  return (
    <>
      {isMobile ? (<img
        src={filled ? './images/FilledStarMobile.svg' : './images/EmptyStarMobile.svg'}
        alt={filled ? 'Filled Star' : 'Empty Star'}
        style={{ display: 'inline-block' }}
      />) : (<img
        src={filled ? './images/FilledStar.svg' : './images/EmptyStar.svg'}
        alt={filled ? 'Filled Star' : 'Empty Star'}
        style={{ display: 'inline-block' }}
      />)}
    </>
  );
};

// StarRating component to render multiple stars based on the rating value
const StarRating = ({ rating, isMobile }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<Star key={i} filled={true} isMobile={isMobile}/>);
  }
  if (hasHalfStar) {
    stars.push(<Star key={filledStars} filled={false} isMobile={isMobile}/>);
  }

  const emptyStarsCount = 5 - filledStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<Star key={filledStars + (hasHalfStar ? 1 : 0) + i} filled={false} isMobile={isMobile}/>);
  }

  return <div>{stars}</div>;
};

// Example usage
const RatingStar = ({ isMobile = false, rating = 0.0 }) => {
  return (
    <div>
      <StarRating rating={rating} isMobile={isMobile} />
    </div>
  );
};

export default RatingStar;
