import { useEffect, useState } from "react";

const user = ({ name }) => {
  const [count] = useState(0);
  useEffect(()=>{
    //Api call
  },[])




  return (
    <div className="user-card">
      <h2>count = {count}</h2>
      <h2>name: {name}</h2>
      <h2>Location: Delhi</h2>
      <h2>Age: 24</h2>
      <h2>Contact: @grv.com</h2>
    </div>
  );
};
export default user;
