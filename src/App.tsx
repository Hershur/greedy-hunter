import React from "react";
import { HashRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import './App.scss';
import GameStartPage from './components/pages/GameStartPage';
import GameOverPage from './components/pages/GameOverPage';
import GameBravoPage from './components/pages/GameBravoPage';
import GamePlayPage from './components/pages/GamePlayPage';
import { useSelector } from "react-redux";
import { IStateProps } from "./reducers/rootReducer";


function App() {
  const hasStartedGame = useSelector<IStateProps, IStateProps["startedGame"]>((state)=> state.startedGame);
  
  return (
    <Router>
      <div className="App">
        <Switch>
            {/* <Route path="/"  component={GameStartPage} /> */}
          
            <Route exact path="/" >
              <GameStartPage />
            </Route>
           
           
            <Route path="/play">
              {!hasStartedGame ? <Redirect to="/" /> : <GamePlayPage />}
            </Route>
              
            <Route path="/over">
              {!hasStartedGame ? <Redirect to="/" /> : <GameOverPage />}
            </Route>

            <Route path="/finished">
              {!hasStartedGame ? <Redirect to="/" /> : <GameBravoPage />}              
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
