import React from 'react';
import PropTypes from 'prop-types'; 

/*
function Food(props) {
  ({fav} = props); 

  return <h3>I like {fav}.</h3>; 
}
*/

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodLike = [
  {
    id : 1,
    name : 'kimchi' ,
    image : 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png', 
    rating : 4.4
  },
  {
    id : 2,
    name : "potato", 
    image : "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg", 
    rating : 3.0 
  }, 
  {
    id : 3, 
    name : "ramen", 
    image : "https://img.hankyung.com/photo/201902/AA.19048482.1.jpg", 
    rating : 4.0 
  }
] ; 

function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  ); 
}

Food.propTypes = {
  name: PropTypes.string.isRequired, 
  picture: PropTypes.string.isRequired, 
  rating: PropTypes.number ,
}

export default App;
