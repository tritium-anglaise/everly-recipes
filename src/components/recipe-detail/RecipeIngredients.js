import React from 'react';
import PropTypes from 'prop-types';

const RecipeIngredients = ({ recipe }) => {
  const ingredients = [];

  Object.keys(recipe).forEach((key) => {
    let index;

    if (key.startsWith('strIngredient') && recipe[key] && recipe[key].trim() !== '') {
      ingredients.push(recipe[key]);
    } else if(key.startsWith('strMeasure') && recipe[key] && recipe[key].trim() !== '') {
      index = parseInt(key.split('strMeasure')[1]) - 1;
      ingredients[index] = `${recipe[key]} ${ingredients[index]}`;
    }
  });

  // // we have to go back through our parsed ingredients to associate a measurement
  // ingredients.forEach((ingredient, index) => {
  //   const measureKey = `strMeasure${index+1}`;
  //   if (recipe[measureKey]) {
  //     ingredients[index] = `${recipe[measureKey]} ${ingredient}`;
  //   } else {
  //     ingredients[index] = `${ingredient} to taste`;
  //   }
  // })

  return (
    <div className="recipe-detail__ingredients">
      <h3>Ingredients</h3>
      {ingredients.map((ingredient) => <div key={ingredient}>{ingredient}</div>)}
    </div>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeIngredients;
