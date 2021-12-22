import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <h3 className="recipe-card__title">{recipe.strMeal}</h3>
    <img className="recipe-card__img" src={recipe.strMealThumb} alt="" />
  </div>
);

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
