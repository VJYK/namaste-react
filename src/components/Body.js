import RestaurantCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";

const BodyComponent = () => {
  let [listOfRestaurents, setListOfRestaurent] = useState([]);

  useEffect(()=> {
    fetchData();
  },[]);

   const fetchData =  async ()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6309308&lng=77.2441075&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();

   //Optional Chaining
   setListOfRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //Conditional Rendering
  /* if(listOfRestaurents.length===0){
    return (<Shimmer />)
  } */

  return listOfRestaurents?.length==0?<Shimmer/>: (
    <div className="body">
      <div className="search">Search</div>

      <div className="filter">

        <div className="search">
          <input type="text" className="search-box"/>
          <button>Search</button>
        </div>


        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurents.filter(
              (restaurent) => restaurent.info.averageRating > 3.9
            );
            setListOfRestaurent(filterList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurents.map(restaurent =>
         <Link key={restaurent?.info.id} to={`/restaurent/${restaurent?.info.id}`}> <RestaurantCard resData={restaurent?.info} /></Link>
        )}
      </div>
    </div>
  );
};
export default BodyComponent;