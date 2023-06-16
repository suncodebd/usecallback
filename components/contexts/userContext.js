const { createContext, useState } = require("react");

export const UserContext = createContext({});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Md Minarul islam", username: "devct" },
    { id: 2, name: "Alex", username: "alex" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;
