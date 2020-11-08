import React from 'react';
import {NotEdibleList} from '../data/notEdible';
import { Link } from 'react-router-dom';

const NotEdible = (props) => {
    let notEdible = NotEdibleList.map((notEdible) => {
      return (
        
        <div className="mushroom-container">
          <div className="notEdible-image" style={{ backgroundImage: "url(" + notEdible.img_src + ")" }}></div>
          <h3>{notEdible.name}</h3>
        </div>
         
  
      );
    });
    return (
      <div className="main-content">
         <div><Link className="back" to="/">BACK</Link></div>
        {/* <h2>{props.title}</h2> */}
        <h2>Some of the Not Edible or Poison Mushrooms</h2>
        <div className="container">
          {notEdible}    
        </div>
      </div>
    );
}

export default NotEdible;
