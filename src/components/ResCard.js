const RestaurantCard=(props)=>{
  const {resData} =props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;
   return (<div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="img-card" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>)
  }

export default RestaurantCard;