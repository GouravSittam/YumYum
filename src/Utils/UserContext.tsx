import { createContext } from "react";

/**
 * User context type definition.
 */
export interface UserContextType {
  loggedInUser: string;
  userId?: string;
  email?: string;
}

const UserContext = createContext<UserContextType>({
  loggedInUser: "",
});

export default UserContext;
