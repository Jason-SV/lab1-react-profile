import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [githubData, setGithubData] = useState(null);
  const username = "Jason-SV";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setGithubData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>My Team Portfolio</h1>
      {githubData ? (
        <ProfileCard
          name={githubData.name || githubData.login}
          role={"GitHub User"}
          bio={
            githubData.bio || "No bio available"
          }
        />
      ) : (
        <p>Loading data from GitHub...</p>
      )}
    </div>
  );
}

export default App;
