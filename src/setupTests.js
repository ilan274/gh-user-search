import React from 'react';
import { render } from '@testing-library/react';
import { MyProvider } from './Context/MyContext';
import App from './App';


const setup = () => {
  const utils = render(<MyProvider><App /></MyProvider>);
  const searchButton = utils.getByText('Search');
  const input = utils.getByRole('textbox');
  return {
    ...utils,
    input,
    searchButton
  };
};

export default setup;
