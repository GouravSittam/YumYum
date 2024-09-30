import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Rudra",
        location: "MP",
        avatar_url: "",
        bio: "",
      },
    };
  }

  async componentDidMount() {
    // console.log("child componentDidMount");

    // Here we call the API
    try {
      const data = await fetch("https://api.github.com/users/GouravSittam");
      const json = await data.json(); // Await the json() method

      // Update user data
      this.setState({
        userInfo: json,
      });

      console.log(json);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  componentWillUnmount(){
    console.log("component will unmounted update")
  }
  render() {
    // const { name } = this.props;
    const { name, location, avatar_url, bio } = this.state.userInfo;

    // console.log("child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Bio: {bio}</h2>
        <h2>Location: {location}</h2>
        <h2>Age: 24</h2>
        <h2>Contact: @grv.com</h2>
      </div>
    );
  }
}

export default UserClass;
