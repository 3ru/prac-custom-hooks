import axios from "axios";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import "./styles.css";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Data Fetch</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Failed to fetch data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
