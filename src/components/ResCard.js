const RestaurantCard=(props)=>{
  debugger
    console.log(props);
    //const {name,cuisines,deliveryTime,costForTwo,averageRating} = props;
   return (<div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="img-card" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design.jpg"/>
      <h3>{props.resData.data.name}</h3>
      <h4>{props.resData.data.cuisines.join(', ')}</h4>
      <h4>{props.resData.data.averageRating} Stars</h4>
      <h4>{props.resData.data.deliveryTime}</h4>
      <h4>{props.resData.data.costForTwo/100}</h4>
    </div>)
  }

export default RestaurantCard;