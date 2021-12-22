import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <Link to={`/detail/${recipe.idMeal}`} className="recipe-list__link" key={recipe.idMeal}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipeList;
