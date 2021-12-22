import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../recipes-context';

const ResultsList = ({ results }) => {
  const { filterBy, setSearchResults } = useContext(RecipesContext);

  return (
    <div className="result-list">
      {results.length === 0 && <span>No results were found.</span>}
      {results.length && results.filter(result => result.strMeal.toLowerCase().startsWith(filterBy)).map(result => (
        <Link
          onClick={() => {
            setSearchResults(null);
          }}
          to={`/detail/${result.idMeal}`}
          className="result-list__link"
          key={result.idMeal}
        >
          {result.strMeal}
        </Link>
      ))}
    </div>
  );
};

ResultsList.propTypes = {
  results: PropTypes.array.isRequired
}

export default ResultsList;
