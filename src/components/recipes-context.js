import React, { useEffect, useState} from 'react';

import { getValue, setValue } from '../utilities/browserStorage';
import { fetchDailyFive } from '../utilities/API';

const loadFavorites = () => window.localStorage.getItem(['recipe-favorites']) || [];
const RECIPES_DATE_KEY = 'dailyRecipesDate';
const RECIPES_KEY = 'dailyRecipes';
const twentyFourHours = 60 * 60 * 24 * 1000;
const now = Date.now();
const recipesLastPersistedDate = getValue(RECIPES_DATE_KEY);
// the recipes in the browser cache are less than 24 hours old
const hasRecentRecipes = recipesLastPersistedDate && now - recipesLastPersistedDate < twentyFourHours;
const getDailyRecipesFromCache = () => getValue(RECIPES_KEY).map((recipeId) => getValue(`recipe-${recipeId}`));

const RecipesContext = React.createContext({});

const RecipesProvider = (props) => {
  const [favorites, setFavorites] = useState(loadFavorites());
  const [dailyRecipes, setDailyRecipes] = useState(hasRecentRecipes ? getDailyRecipesFromCache() : []);
  const [searchResults, setSearchResults] = useState(null);
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    if (searchResults) {
      setSearchResults(searchResults);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy]);

  useEffect(() => {
    if (!hasRecentRecipes) {

      // update the last-saved date
      setValue(RECIPES_DATE_KEY, now);

      const dailyFive = [];
      const normalizedRecipes = [];
      // fetch five recipes
      fetchDailyFive().then((recipes) => {
        // set individually in browser storage for caching purposes
        recipes.forEach((recipe) => {
          setValue(`recipe-${recipe.meals[0].idMeal}`, recipe.meals[0]);
          normalizedRecipes.push(recipe.meals[0]);
          dailyFive.push(recipe.meals[0].idMeal);
        });

        // persist the 'daily five'
        setValue(RECIPES_KEY, dailyFive);

        // and update in state
        setDailyRecipes(normalizedRecipes);

      }).catch((err) => {
        console.log('something went wrong', err);
      });
    }
  }, [])

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([id, ...favorites]);
    }
  };

  const isFavorite = id => favorites.includes(id);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(val => val !== id));
  };

  const state = {
    addFavorite,
    filterBy,
    isFavorite,
    dailyRecipes,
    removeFavorite,
    searchResults,
    setFilterBy,
    setSearchResults,
  };

  return (
    <RecipesContext.Provider value={state}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export {
  RecipesContext,
  RecipesProvider
}
