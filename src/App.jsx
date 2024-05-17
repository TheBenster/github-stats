import axios from "axios";
import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  let username = "TheBenster"; // put username here
  const githubURL = `https://api.github.com/users/${username}/repos`;
  const githubJSON = useFetch(githubURL);
  const result = githubJSON.data;
  console.log(result);

  // `https://api.github.com/repos/${username}/${repo}/commits`;

  let repoNames = [];

  if (result) {
    repoNames = result.map((repo) => repo.name);
  }

  repoNames.forEach((repo) => {
    let commitJSON = useFetch(
      `https://api.github.com/repos/${username}/${repo}/commits`
    );
    let commitResult = commitJSON.data;
    console.log(commitResult);
  });

  console.log(repoNames);
  return (
    <div className="flex justify-center items-center h-full">
      <div
        id="total-commits"
        className=" w-56 h-56 border-2 rounded-md border-indigo-950"
      ></div>
    </div>
  );
}

export default App;
