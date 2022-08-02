import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/character/:id" component={ CharacterDetails } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
