import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
          userInfo:{
            name:'Dummy',
            location:'Default'
          }}
    }

    async componentDidMount(){

      const data = await fetch("https://api.github.com/users/VJYK");
      const json = await data.json()
      console.log(json);
      this.setState({
        userInfo:json
      })

    }
  render() {
    const {name,location}=this.state.userInfo;

    return (
      <div className="user-info">
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
      </div>
    );
  }
}

export default UserClass;
