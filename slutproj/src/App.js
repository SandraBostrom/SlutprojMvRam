import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import RecipeThumb from "./Components/elements/RecipeThumb";
import Grid from "./Components/elements/Grid";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "./Components/styles/StyledSearchBar";

const App = () => {
  const APP_ID = "fd68921a";
  const APP_KEY = "9b758e00c332715857a48a371d4798fa	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("popular");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <StyledSearchBar>
        <StyledSearchBarContent>
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
            />
          </form>
        </StyledSearchBarContent>
      </StyledSearchBar>
      <Grid >
        {recipes.map((recipe) => (
          <RecipeThumb 
            clickable
            key ={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
      </Grid>
    </div>
  );
};

export default App;
