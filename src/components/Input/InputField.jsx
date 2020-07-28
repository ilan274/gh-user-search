import React, { useContext } from 'react';
import { Input } from 'semantic-ui-react';
import { MyContext } from '../../Context/MyContext';
import callApi from '../../services/api';

function InputField() {
  const {setUsername, setUserDetails, setError, setLoading, username} = useContext(MyContext)
  const handleKeyDown = (e) => (e.key === 'Enter') && callApi(
    setUserDetails, setError, setLoading, username
  );
  return (
    <Input
      data-testid="input-field"
      className="input"
      placeholder='Type a GitHub username'
      onChange={(e) => setUsername(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default InputField;
