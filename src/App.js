import { useContext } from 'react';

import { RecipesContext } from './recipes-context';
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import ResultsList from './components/ResultsList';

function App() {
  const { dailyRecipes, searchResults } = useContext(RecipesContext);

  return (
    <>
      <NavigationBar>
        <SearchBar />
      </NavigationBar>
        {!searchResults &&
          <>
            <div title="EverlyHealth Recipe Browser" className="home-page__container--top" role="presentation" />
            <h4 className="home-page__subhead">Recipes of the Day</h4>
            <RecipeList recipes={dailyRecipes} />
          </>
        }
        {searchResults && <ResultsList results={searchResults} />}
    </>
  );
}

export default App;
