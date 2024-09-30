// import User from "./User";
// import { render } from "react-dom";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent componet Didmount")
  }

  render() {
    console.log("parent Render")
    return (
      <div>
        <h1>About</h1>
        <h2>This is an about page</h2>
        {/* <User name={"Gourav Chaudhary (function)"} /> */}
        <UserClass name={"Gourav Chaudhary (class)"} />
      </div>
    );
  }
}

export default About;


// const About=()=>{
//     return(
//         <div>
//         <h1>About</h1>
//         <h2>This is a about page</h2>
//         {/* <User name={"Gourav Chaudhary (function)"} /> */}

//         <UserClass name={"Gourav chaudhary (class)"}/>
//         </div>
//     );
// };
// export default About;