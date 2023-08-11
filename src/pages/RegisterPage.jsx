import { useState } from "react";
import { Button } from "react-bootstrap";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // fetching all users
  const handleFetchUsers = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) {
        throw new Error("Something went wrong pls try again");
      }
      const result = await response.json();
      setUsers(result.users);
      // console.log(result.users);
    } catch (error) {
      // console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center mt-5">Get Username and password for login</h2>
      <div className="text-center mt-3">
        <Button onClick={handleFetchUsers}>Get Username and password</Button>
      </div>

      <main>
        {loading && <h2 className="text-center mt-5">Loading...</h2>}
        {error && <h2 className="text-center mt-5">{error}</h2>}
        {users?.map((user) => {
          return (
            <div key={user.id} className="text-center mt-5">
              <h4>Username: {user.username}</h4>
              <h4>Password: {user.password}</h4>
            </div>
          );
        })}
      </main>
    </>
  );
}
