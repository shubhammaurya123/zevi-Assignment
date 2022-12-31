
import React from "react";
import './searchitemlist.css'
import StarRating from "../Starrating/Starrating";
import SearchItem from "../SearchItem/SearchItem";
import { useEffect, useState } from "react";

function Searchitemlist() {

  var url = "https://fakestoreapi.com/products?limit=12";

  const [Data, setData] = useState([]);
  const fetchData = () => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Here you need to use an temporary array to store NeededInfo only 
        setData(data);
      });

    console.log(Data);

  }

  useEffect(() => {

    fetchData();

  }, []);
  console.log(Data);
  
  return (

    <div className="searchitemlist">
      <div className="search">
        <input type="text" placeholder="Search" className="search-item" ></input>
      </div>
      <div className="search-result-text"><h1>Search Result</h1></div>
      <div className="spliting-part">
        <div className="split-left">
          <div className="centered">
            <h2> CATEGORY</h2>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label > jewelery</label><br></br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label >Electronics</label><br></br>
          </div>
          <hr />
          <div className="centered">
            <h2>  PRICE AND RANGE</h2>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label > 500</label><br></br>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label> 500-1000</label><br></br>
          </div>
          <hr />
          <div className="centered">
            <h2>Rating</h2>
            <div className="contain">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <StarRating rating={5} />
            </div>
            <div className="contain">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <StarRating rating={4} />
            </div>
            <div className="contain">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <StarRating rating={3} />
            </div>
            <div className="contain">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <StarRating rating={2} />
            </div>
            <div className="contain">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <StarRating rating={1} />
            </div>

          </div>
        </div>
        <div className="split-right ">

        
          {Data.map((element) => {
            return <SearchItem title={element.title} price={element.price} image={element.image} rating={element.rating} />

          })}
        </div>
      </div>
    </div>
  );
}

export default Searchitemlist