import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getValue, setValue } from '../utilities/browserStorage';
import { fetchDetail } from '../utilities/API';
import RecipeIngredients from './RecipeIngredients';
import NavigationBar from '../components/NavigationBar';
import FavoriteButton from './FavoriteButton';


const RecipeDetail = () => {
  const { detailId } = useParams();
  const [recipe, setRecipe] = useState(getValue(`recipe-${detailId}`) || null);

  // there are certainly more React-y ways to do this, but this is ok, for now.
  document.getElementsByTagName('html')[0].scrollTop = 0;

  if (!recipe) {
    fetchDetail(detailId)
      .then((result) => {
        const recipeResult = result.meals[0];
        // cache
        setValue(`recipe-${recipeResult.idMeal}`, recipeResult);
        // update UI
        setRecipe(recipeResult);
      });
  }

  return (
    <>
      <NavigationBar>
        {recipe && <FavoriteButton detailId={recipe.idMeal}/>}
      </NavigationBar>
      {recipe && (
        <div className="recipe-detail">
          <div
            className="recipe-detail__image"
            role="presentation"
            style={{
              backgroundImage: `url(${recipe.strMealThumb})`
            }}
          />

          <div className="recipe-detail__container">
            <h1 className="recipe-detail__title">{recipe.strMeal}</h1>
            <RecipeIngredients recipe={recipe} />

            <div className="recipe-detail__instructions">
              <h3>Directions</h3>
              {recipe.strInstructions}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
