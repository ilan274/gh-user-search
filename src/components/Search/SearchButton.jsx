import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { MyContext } from '../../Context/MyContext';
import callApi from '../../services/api';

function SearchButton() {
  const { setUserDetails, setError, setLoading, username, loading } = useContext(MyContext);
  return (
    <Button
      data-testid="search-button"
      secondary
      onClick={() => callApi(setUserDetails, setError, setLoading, username)}
      disabled={username === '' || loading}
    >
      Search</Button>
  );
}

export default SearchButton;
