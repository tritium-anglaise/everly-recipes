import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetail from './recipe-detail/RecipeDetail';
import { RecipesProvider } from './recipes-context';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
