import { use } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = ({ usersPromise }: { usersPromise: () => Promise<User[]> }) => {
  const users = use(usersPromise());

  return (
    <div>
      <h1>users Components</h1>
      {users.map((user) => (
        <div key={user.id}>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;
