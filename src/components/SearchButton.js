import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const SearchButton = ({ inputRef }) => {
  const appRoot = document.getElementsByTagName('body')[0];

  const Button = (
    <button
      className="search__button"
      onClick={() => {
        inputRef.current.focus();
      }}
    ><i className="fas fa-search"/></button>
  );

  return (
    ReactDOM.createPortal(
      Button,
      appRoot
    )
  );
}

SearchButton.propTypes = {
  inputRef: PropTypes.object.isRequired
};

export default SearchButton;
