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
   return (<div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="img-card rounded-lg" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"/>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>)
  }

//Higher Order Component

//input - RestaurentCard ==> RestaurentCardPromoted

export const withPromotedLabel = (ResCard)=>{
  return (props)=>{
    return (
    <>
      <label className="absolute bg-black text-white m-2 p-3 rounded-lg">Promoted</label>
      <ResCard {...props}/>
    </>)
  }
}

export default RestaurantCard;