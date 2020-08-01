import React from 'react';
import './App.css';
import Header from './Header';
import Tindercards from './Tindercards';
import SwipeButtons from './SwipeButtons';
import  Chats from './Chats';
import Chatscreen from './Chatscreen';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <Router>
        {/**Header */}
      
      <Switch>

      <Route path="/chat/:person">
        <Header backbutton="/chat"/>
        <Chatscreen/>
        </Route>
           

        <Route path="/chat">
        <Header backbutton="/"/>
        <Chats/>
           
        </Route>
        <Route path="/">
          <Header/>
          {/**Tinder card */}
          <Tindercards/>
          <SwipeButtons/>
        </Route>

      </Switch>

          

          {/**Button at bottm of the cards */}





          {/**chatscreen */}
          {/**Individual chat screen */}

      </Router>
      
      
    </div>
  );
}

export default App;
