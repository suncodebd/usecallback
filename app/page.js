"use client";
import UsersProvider from "@/components/contexts/userContext";
import NewUser from "@/components/newUser";
import Users from "@/components/users";

function Home() {
  return (
    <UsersProvider>
      <main className="flex  flex-col items-center justify-between p-5">
        <NewUser />
        <Users />
      </main>
    </UsersProvider>
  );
}

export default Home;
