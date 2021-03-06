import React, { useState, useEffect } from "react";
import API_KEY from "./keys";

const context_key = "5ad750a9e93dd9b0d";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${context_key}&q=${term}`
      )
        .then((res) => res.json())
        .then((results) => {
          setData(results);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
