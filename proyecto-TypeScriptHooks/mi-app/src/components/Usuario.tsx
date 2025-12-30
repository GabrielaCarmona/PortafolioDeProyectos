import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

export const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "Gabriela Carmona",
    });
  };

  return (
    <div className="mt-2">
      <h3>User:</h3>

      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>

      {!user ? (
        <pre> Sin usuario logueado. </pre>
      ) : (
        <pre> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};
