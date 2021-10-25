import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import Quotes from './components/Quotes';
import CharacterPage from './components/CharacterPage';
import EpisodePage from './components/EpisodePage';

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/episodes">Episodes</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
          <Route exact path="/quotes">
            <Quotes />
          </Route>
          <Route path="/characters/:charId">
            <CharacterPage />
          </Route>
          <Route path="/episodes/:episodeId">
            <EpisodePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
