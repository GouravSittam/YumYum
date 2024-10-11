// import User from "./User";
// import { render } from "react-dom";
import UserClass from "./UserClass";
import { Component} from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent component DidMount")
  }
  render() {
    console.log("parent Render");
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-pink-700 mb-4 text-center">About</h1>
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">This is an about page</h2>
          {/* <User name={"Gourav Chaudhary (function)"} /> */}
          <UserClass name={"Gourav"} location={"HP"} />
        </div>
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