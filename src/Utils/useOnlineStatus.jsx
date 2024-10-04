import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // try if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    // try if online
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //BOOLENA VALUE
  return onlineStatus;
};
export default useOnlineStatus;
