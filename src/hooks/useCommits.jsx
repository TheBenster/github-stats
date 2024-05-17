import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useCommits = (username, repoNames) => {
  // instead of making a new instance of a hook for each repository, put them in a state
  const [commitResults, setCommitResults] = useState([]);
};
