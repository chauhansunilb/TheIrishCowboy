import React from 'react';
import {MasterView} from './src/Component';
import AppNavigation from './src/Navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <MasterView>
      <AppNavigation />
    </MasterView>
  );
}

export default App;
