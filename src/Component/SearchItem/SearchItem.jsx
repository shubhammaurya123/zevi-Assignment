import React from 'react';
import '../Starrating/Starrating.css'
import StarRating from '../Starrating/Starrating';
import { useState } from 'react';
import { FcLike , FcLikePlaceholder} from 'react-icons/fc';
import './SearchItem.css'
const SearchItem = (props) => {
  let {image , title ,price , rating  } = props;
  const[istrue , setistrue] = useState(0)
   function ChangeColor () {
       setistrue(1^istrue);
   }
  return (
    <div className="centered1">
      <div className='ItemCard'>
        <img src={image} alt="Avatar man" className='imgview' />
        <button className='btn'>View Product</button>
        {
          istrue ? <FcLike className='Love-like-Icon' onClick={ChangeColor} /> : <FcLikePlaceholder className='Love-like-Icon' onClick={ChangeColor}/>
        }
      </div>
      <h2 className ="titleItem">{title}</h2>
      <h3>Rs {price}</h3>
      <StarRating rating={rating.rate}  />({rating.count})
      <div>

      </div>
    </div>
  );
}

export default SearchItem;