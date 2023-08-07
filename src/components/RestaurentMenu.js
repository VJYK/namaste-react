import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import MENU_API from "../utils/constants"

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  });

  const {resId} = useParams();

  //Menu Api Call
  const fetchMenu = async () => {
    const data = await fetch(
        MENU_API+ +resId
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  const {itemsCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("itemscards",itemsCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(', ')}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurentMenu;
