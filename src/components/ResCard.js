const RestaurantCard=(props)=>{
    console.log(props);
   return (<div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="img-card" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"/>
      <h3>{props.resname}</h3>
      <h4>Biryani, North Indian, Indian</h4>
      <h4>4.3 Star</h4>
      <h4>38 Minutes</h4>
    </div>)
  }

export default RestaurantCard;