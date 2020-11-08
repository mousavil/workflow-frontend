import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import CreateWorkflow from './pages/CreateWf';
import CreateRule from './pages/CreateRule';
import Workflows from './pages/WorkFlows';
import Rules from './pages/Rules';
import Rule from './pages/Rule';

import EditWorkflow from './pages/EditWorkflow';
import EditRule from './pages/EditRule';

import './App.css';
import './tailwind.output.css';
function App() {
  return (
    <div className="App">
      <Router>

        <ul className="flex flex-row w-8/12 border-orange-500 border-4 mx-auto">
          <li><pre className="text-teal-400 my-2 mx-8 border-orange-500 border-2"><Link to="/">home</Link></pre></li>
          <li><pre className="text-teal-400 my-2 mx-8 border-orange-500 border-2"><Link to="/workflows">work flows</Link></pre></li>
          <li><pre className="text-teal-400 my-2 mx-8 border-orange-500 border-2"><Link to="/rules">rules</Link></pre></li>
          <li><pre className="text-teal-400 my-2 mx-8 border-orange-500 border-2"><Link to="/create-workflow">new work flows</Link></pre></li>
          <li><pre className="text-teal-400 my-2 mx-8 border-orange-500 border-2"><Link to="/create-rule">new rule</Link></pre></li>
        </ul>
        <Switch>
          <Route exact path="/"><Home /></Route>

          <Route path="/workflows"><Workflows /></Route>

          <Route path="/rules"><Rules /></Route>

          <Route path="/create-workflow"><CreateWorkflow /></Route>

          <Route path="/create-rule"><CreateRule /></Route>

          <Route path="/edit-rule/:id"><EditRule /></Route>

          <Route path="/show-rule/:id"><Rule /></Route>

          <Route path="/edit-wf/:id"><EditWorkflow /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

function Home() {
  return (
    <>
      <h1>HOME</h1>
    </>
  );
}