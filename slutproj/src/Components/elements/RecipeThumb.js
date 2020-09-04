import React from "react";
import { Link } from "@reach/router";

import { StyledRecipeThumb } from "../styles/StyledRecipeThumb";

const RecipeThumb = ({ image, title, clickable }) => (
  <StyledRecipeThumb>
    {clickable ? (
      <Link to={`/${title}`}>
        {" "}
        <p>{title}</p>
        <img className="clickable" src={image} alt="RecipeThumb" />
      </Link>
    ) : (
      <img src={image} alt="RecipeThumb" />
    )}
  </StyledRecipeThumb>
);

export default RecipeThumb;
