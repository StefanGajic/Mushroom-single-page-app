import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import EdibleContainer from './components/edibleContainer';
import NotEdible from './components/notEdible';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Navbar />
        <Route exact path="/" render={() => <Home title="World of Mushrooms" />} />
        <Route path="/edible/" render={() => <EdibleContainer title="Edible" />} />
        <Route path="/not-edible" component={NotEdible} />
      </div>
    </BrowserRouter>
  );
}

export default App;
