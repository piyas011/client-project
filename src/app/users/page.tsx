import Users from "@/components/Users";
import React, { Suspense } from "react";

const usersPromise = async () => {
  const res = await fetch("http://localhost:5000/users");
  return res.json();
};

const UsersPages = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Users usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default UsersPages;
