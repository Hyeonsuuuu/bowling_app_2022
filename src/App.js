import React from 'react';

function Bowling({name, picture}) {
  return (
  <div>
    <h1>I like {name}</h1>
    <img src={picture} />
  </div>
  );
}

const bowlingILike = [
  {
    name: 'Roto Grip UC3',
    image: 'http://happybowling.co.kr/web/product/big/202111/f2772e27804d31d4bcbe7bf22dc3ebba.jpg'
  },
  {
    name: 'Stom PITCHBLACK',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3T1rkT912TG3cOOfFeH_tgHaGL%26pid%3DApi&f=1'
  },
  {
    name: 'Hammer PURPLEPEARL',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.FGgQUqqH3PxZ64era-Z9KQHaHa%26pid%3DApi&f=1'
  },
  {
    name: '900Global HONEYBADHER',
    image: 'http://openimage.interpark.com/goods_image/9/8/3/3/8776509833s.jpg'
  },
  {
    name: 'Track PARDOX',
    image: 'http://img.danawa.com/prod_img/500000/125/135/img/12135125_1.jpg?shrink=330:330&_v=20211216090923'
  },
];

function App() {
  return (
  <div>
    {bowlingILike.map(dish => <Bowling key={dish.name} Bowling name={dish.name} picture={dish.image} />)}
  </div>
  );
}

export default App;
