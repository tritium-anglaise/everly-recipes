import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { RecipesContext } from '../recipes-context';

const FavoriteButton = ({ detailId }) => {
  const {addFavorite, isFavorite, removeFavorite} = useContext(RecipesContext);

  const toggleFavorite = () => {
    if (isFavorite(detailId)) {
      removeFavorite(detailId);
    } else {
      addFavorite(detailId);
    }
  }

  return (
    <button
      className="favorite-button"
      onClick={toggleFavorite}
    >
      <i className={`fa${isFavorite(detailId) ? 's': 'r'} fa-heart`} />
    </button>
  );
};

FavoriteButton.propTypes = {
  detailId: PropTypes.string.isRequired
};

export default FavoriteButton;
