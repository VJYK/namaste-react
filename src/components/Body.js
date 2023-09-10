import RestaurantCard,{withPromotedLabel} from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [listOfRestaurents, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RescardPromotedLabel = withPromotedLabel(RestaurantCard)

  useEffect(()=> {
    fetchData();
  },[]);

   const fetchData =  async ()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6309308&lng=77.2441075&page_type=DESKTOP_WEB_LISTING");
   const json = await data.json();
    console.log(json.data.cards);
   //Optional Chaining
   if(json?.data?.cards[2]?.card?.card?.gridElements){
     setListOfRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   } else if(json?.data?.cards[3]?.card?.card?.gridElements){
    setListOfRestaurent(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
   if(json?.data?.cards[2]?.card?.card?.gridElements){
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  } else if(json?.data?.cards[3]?.card?.card?.gridElements){
    setFilteredRestaurant(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
   
  }
  //Conditional Rendering
  /* if(listOfRestaurents.length===0){
    return (<Shimmer />)
  } */

  return listOfRestaurents.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurent) => (
          <Link
            key={restaurent?.info.id}
            to={"/restaurent/" + restaurent?.info.id}
          >
            {/** if the restaurant is promoted then add a promoted label to it*/}

            {restaurent?.data?.promoted ? (<RescardPromotedLabel resData={restaurent.info}/>):(<RestaurantCard resData={restaurent.info}/>)}
            {/* <RestaurantCard resData={restaurent?.info} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;