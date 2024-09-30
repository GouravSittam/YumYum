import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name } = this.props;
    return (
      <div className="user-card">
        <h2>name: {name}</h2>
        <h2>Location: Delhi</h2>
        <h2>Age: 24</h2>
      </div>
    );
  }
}

export default UserClass;
