// import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
        <h1>About</h1>
        <h2>This is a about page</h2>
        {/* <User name={"Gourav Chaudhary (function)"} /> */}

        <UserClass name={"Gourav chaudhary (class)"}/>
        </div>
    );
};
export default About;