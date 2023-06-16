import { UserContext } from "@/components/contexts/userContext";
import { useContext } from "react";

export const UseUsersContext = () => {
  return useContext(UserContext);
};
