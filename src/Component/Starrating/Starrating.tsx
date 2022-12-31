import React from 'react';
import './Starrating.css'
const StarRating = (props:any) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
      stars.push(<span key={i} className="fa fa-star checked star-color"></span>);
    } else {
      stars.push(<span key={i} className="fa fa-star"></span>);
    }
  }

  return (
    <div>
      {stars}
    </div>
  );
}

export default StarRating;