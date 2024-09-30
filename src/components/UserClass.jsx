import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state={
        count:0,
       
    }

  }
  render() {
    const { name } = this.props;
    const {count}=this.state;
    return (
      <div className="user-card">
        <h2>count: {count}</h2>
        <button onClick={()=>{
            //never state variable directly
            this.setState({
                count: this.state.count+1, 
            })
        }}>Count Increase</button>



        <h2>name: {name}</h2>
        <h2>Location: Delhi</h2>
        <h2>Age: 24</h2>
        <h2>Contact: @grv.com</h2>
      </div>
    );
  }
}

export default UserClass;
