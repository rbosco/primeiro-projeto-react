import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Globals from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Globals />
  </>
);

export default App;
