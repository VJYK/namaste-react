import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurentMenu = () => {
  const {resId} = useParams();
  debugger
  const resInfo = useRestaurentMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

  const {itemsCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
