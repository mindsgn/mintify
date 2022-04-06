import React from 'react';
import { Provider }  from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';
import Home from './screens/home';

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
          <PersistGate 
            loading={null}
            persistor={persistor}>
            <Home />
          </PersistGate>
        </Provider>
    )
};

export default App;