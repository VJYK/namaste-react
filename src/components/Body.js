import RestaurantCard from "./ResCard";
import { useState } from "react";

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

  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="filter">
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