import React, { useContext } from 'react';
import './App.css';
import { Segment, Divider, Loader } from 'semantic-ui-react';
import CardDetails from './components/Card/CardDetails';
import { MyContext } from './Context/MyContext';
import ErrorMessage from './components/Error/ErrorMessage';
import SearchButton from './components/Search/SearchButton';
import InputField from './components/Input/InputField';
import Footer from './components/Footer/Footer'

function App() {
  const {
    loading,
    error
  } = useContext(MyContext);
  return (
    <Segment basic textAlign='center'>
      <InputField />
      <SearchButton />
      <Divider data-testid='result-text' horizontal>Result</Divider>
      {loading && <Loader active inline />}
      {!error && <CardDetails />}
      {error && <ErrorMessage />}
      <Footer />
    </Segment>
  );
}

export default App;
