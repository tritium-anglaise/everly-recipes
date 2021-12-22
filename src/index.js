import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';
import App from './components/home-page/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/recipe-detail/RecipeDetail';
import { RecipesProvider } from './components/recipes-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipesProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/detail/:detailId" element={<RecipeDetail />} />
        </Routes>
      </RecipesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
