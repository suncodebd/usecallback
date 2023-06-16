import { UseUsersContext } from "@/hooks/useUserContext";
import { useState } from "react";

function NewUser() {
  const { setUsers } = UseUsersContext();

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      username: username,
      id: new Date().getTime().toString(),
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);

    setName("");
    setUserName("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-5">User Registration</h2>
      <form
        className="w-96 bg-slate-300 flex flex-col items-center p-5 gap-y-3 mb-4 rounded"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full outline-0 p-2 rounded"
          type="text"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="w-full outline-0 p-2 rounded"
          type="text"
          name="username"
          placeholder="UserName"
          value={username}
          required
          onChange={handleUserNameChange}
        />
        <button
          type="submit"
          className="border border-black duration-200 p-2 rounded font-bold hover:bg-slate-700 hover:text-white hover:border-white"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default NewUser;
