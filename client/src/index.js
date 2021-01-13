import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { TextContext } from './context';

import 'whatwg-fetch';
import './styles/index.scss';

import Container from './components/Container';

const App = () => {
  const appendText = (text) => {
    setState(prevState => ({
        ...prevState,
        texts: [text].concat(prevState.texts)
      })
    );
  };

  const setError = (error) => {
    setState(prevState => ({
        ...prevState,
        error,
      })
    );
  };

  const [state, setState] = useState({
    texts: [],
    error: null,
    appendText,
    setError,
  });

  return (
    <TextContext.Provider value={state}>
      <Container />
    </TextContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
