import React from 'react';
import {EdibleList} from '../data/edible';
import { Link } from 'react-router-dom';

const Edible = (props) => {
    let edibleMushroom = EdibleList.map((edible) => {
      return (
        <div className="mushroom-container">
          <Link to={`/edible/${edible.url}`}><div className="edible-image" style={{ backgroundImage: "url(" + edible.img_src + ")" }}></div></Link>
          <h3>{edible.name}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">BACK</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {edibleMushroom}
        </div>
      </div>
    );
}

export default Edible;
