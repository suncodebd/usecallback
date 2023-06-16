import { UseUsersContext } from "@/hooks/useUserContext";
import User from "./user";

function Users() {
  const { users } = UseUsersContext();
  return (
    <section>
      <div className="grid gap-4 grid-cols-2  ">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}

export default Users;
