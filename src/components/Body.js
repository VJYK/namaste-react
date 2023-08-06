import RestaurantCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer'

const BodyComponent = () => {
  let [listOfRestaurents, setListOfRestaurent] = useState([
    {
      data: {
        id: "334475",
        name: "KFC",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
        costForTwo: 40000,
        deliveryTime: 36,
        averageRating: "4.1",
      },
    },
    {
      data: {
        id: "334476",
        name: "Dominos",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
        costForTwo: 40000,
        deliveryTime: 36,
        averageRating: "4",
      },
    },
    {
      data: {
        id: "334477",
        name: "La pi Lanzo",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Foods"],
        costForTwo: 40000,
        deliveryTime: 36,
        averageRating: "3.6",
      },
    },
  ]);

  useEffect(()=>{fetchData()},[]);

  const fetchData = async ()=>{
   //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6242263&lng=77.203868&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   //const json = await data.json();

   //console.log(json);


   //Optional Chaining
   //setListOfRestaurent(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional Rendering
  /* if(listOfRestaurents.length===0){
    return (<><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /><Shimmer /></>)
  } */

  return listOfRestaurents.length===0?<Shimmer/>: (
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
              (restaurent) => restaurent.data.averageRating > 3.9
            );
            setListOfRestaurent(filterList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurents.map(restaurent =>
          <RestaurantCard key={restaurent.data.id} resData={restaurent} />
        )}
      </div>
    </div>
  );
};
export default BodyComponent;