import { useState, useCallback } from "react";
import { APP_URL, APP_KEY } from "../App.js";

export const useRecipeFetch = (query) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
        https: const endpoint = `search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      const creditsEndpoint = `search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [recipeId]);
};
