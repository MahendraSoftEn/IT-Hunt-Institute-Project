import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import Application from './src/Container/Auth/Navigation/Application';
import { Provider } from 'react-redux';
import { store } from './utilities/MyStore/Store';


 function App() {

  return (
    <Provider store={store}>
         <Application />
    </Provider>
   
  );
}

export default App;
