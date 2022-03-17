import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Router } from './Router';
import { store, persistor } from './store';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <h1>Hello World</h1>
          </Router>
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default App;
