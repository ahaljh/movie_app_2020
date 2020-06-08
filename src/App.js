import React from 'react';

/*
function Food(props) {
  ({fav} = props); 

  return <h3>I like {fav}.</h3>; 
}
*/

function Food({fav}) {
  return <h3>I like {fav}</h3>; 
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="potato" />
      <Food fav="ramen" />
    </div>
  ); 
}

export default App;
