import React from 'react';
import {EdibleList} from '../data/edible';
import EdibleMushroom from './edibleMushroom';
import Edible from './edible';
import { Route } from 'react-router-dom';

const EdibleContainer = (props) => {
    let edibleUrl = EdibleList.map((edible,i) => {
        return (
          <Route key={i} path={`/edible/${edible.url}`} render={() => <EdibleMushroom name={edible.name} image={edible.profile_img} details={edible.description}/>} />
        );
      });

    return (
        <React.Fragment>
          <Route exact path="/edible" render={() => <Edible title="Common Edible Mushrooms"/>} />
          {edibleUrl}
        </React.Fragment>
    );
}

export default EdibleContainer;
