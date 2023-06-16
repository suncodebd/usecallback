import { UseUsersContext } from "@/hooks/useUserContext";
import { AiFillDelete } from "react-icons/ai";

function User({ user }) {
  const { users, setUsers } = UseUsersContext();
  const { id, name, username } = user;
  const handleDelete = (id) => {
    const filtersDeleteUser = users.filter((user) => user.id !== id);
    setUsers(filtersDeleteUser);
  };

  return (
    <table className="border-collapse border border-slate-400 w-96 bg-slate-200 ">
      <thead>
        <tr>
          <th className="border border-slate-300 text-center  ">Name</th>
          <th className="border border-slate-300 text-center ">UserName</th>
          <th className="border border-slate-300 text-center  ">Id</th>
          <th className="border border-slate-300 text-center  ">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 text-center ">{name}</td>
          <td className="border border-slate-300 text-center">{username}</td>
          <td className="border border-slate-300 text-center ">{id}</td>
          <td className="border border-slate-300 text-center ">
            <button
              type="button"
              className="hover:text-red-500 duration-100 "
              onClick={() => {
                handleDelete(id);
              }}
            >
              <AiFillDelete />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default User;
