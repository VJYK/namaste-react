import RestaurantCard from "./ResCard";

const BodyComponent =()=>{
    return  (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resname="Meghana Sweets"/>
        
      </div>
    </div>)
    }
export default BodyComponent;