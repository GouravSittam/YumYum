import React from 'react';

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center">About Me</h1>
        <div className="flex justify-center mb-4">
          <button className="px-4 py-2 bg-pink-500 text-white rounded-full focus:outline-none">About</button>
          <button className="px-4 py-2 ml-2 bg-pink-100 text-pink-500 rounded-full focus:outline-none">Skills</button>
        </div>
        <div className="bg-pink-50 p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.121A4.967 4.967 0 014 16.5 4.967 4.967 0 015.121 13.88M8 12h.01M12 12h.01M16 12h.01M21 12h.01M21 16.5a4.967 4.967 0 01-1.121 2.621M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M16.5 3a4.5 4.5 0 00-9 0v1a4.5 4.5 0 009 0V3z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-pink-700">Gourav Chaudhary</h2>
              <p className="text-pink-500">Himachal Pradesh, India</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Passionate developer with a love for creating beautiful and functional web applications.
            Always eager to learn and explore new technologies.
          </p>
          <ul className="text-pink-500">
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm6 16v-1a3 3 0 00-3-3H5a3 3 0 00-3 3v1" />
              </svg>
              gourav@example.com
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l1 2 4 5H7l1-2-4-5zm0 0l4-4m6 4l4 4m-4-4L7 6m12 0a4 4 0 100-8 4 4 0 000 8zm4 4h-6v6m0 0H4a2 2 0 01-2-2V4a2 2 0 012-2h6m0 0h6a2 2 0 012 2v6z" />
              </svg>
              +91 98765 43210
            </li>
            <li className="flex items-center mb-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387v-8.043H5.897V12h2.308V9.413c0-2.28 1.343-3.539 3.396-3.539.979 0 2 .177 2 .177v2.209h-1.127c-1.11 0-1.456.691-1.456 1.4V12h2.478l-.396 3.343h-2.082V24C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              github.com/gourav
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l1 2 4 5H7l1-2-4-5zm0 0l4-4m6 4l4 4m-4-4L7 6m12 0a4 4 0 100-8 4 4 0 000 8zm4 4h-6v6m0 0H4a2 2 0 01-2-2V4a2 2 0 012-2h6m0 0h6a2 2 0 012 2v6z" />
              </svg>
              linkedin.com/in/gourav
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;



// // import User from "./User";
// // import { render } from "react-dom";
// import UserClass from "./UserClass";
// import { Component} from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("parent constructor");
//   }
//   componentDidMount() {
//     // console.log("parent component DidMount")
//   }
//   render() {
//     console.log("parent Render");
//     return (
//       <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 flex flex-col items-center justify-center p-6">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
//           <h1 className="text-4xl font-bold text-pink-700 mb-4 text-center">About</h1>
//           <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">This is an about page</h2>
//           {/* <User name={"Gourav Chaudhary (function)"} /> */}
//           <UserClass name={"Gourav"} location={"HP"} />
//         </div>
//       </div>
//     );
//   }
// }

// export default About;


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