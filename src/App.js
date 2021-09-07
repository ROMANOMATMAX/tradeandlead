import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Header from './components/Header';
import Seccion1 from './components/Seccion1';
import Seccion2 from './components/Seccion2';
import Seccion3 from './components/Seccion3'
import Seccion4 from './components/Seccion4';
import styled from '@emotion/styled' 

const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background: gray;
  display: grid;
  grid-template-columns: 100px 1fr;
`;

function App() {
  return(
    <Router>
      <MainContainer>
      <Header/>
      <Switch>
        <Route exact path="/" component={Seccion1}/>
        <Route exact path="/seccion2" component={Seccion2}/>
        <Route exact path="/seccion3" component={Seccion3}/>
        <Route exact path="/seccion4" component={Seccion4}/>
      </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
