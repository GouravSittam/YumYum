import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state={
        count:0,
        count2:2,
    }

  }
  render() {
    const { name } = this.props;
    const {count, count2}=this.state;
    return (
      <div className="user-card">
        <h2>count: {count}</h2>
        <h2>count2: {count2}</h2>
        <h2>name: {name}</h2>
        <h2>Location: Delhi</h2>
        <h2>Age: 24</h2>
        <h2>Contact: @grv.com</h2>
      </div>
    );
  }
}

export default UserClass;
