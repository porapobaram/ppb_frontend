import React from 'react';

const BarCrawlItem = ({ item, onClickHandler }) => {
  const { bcImg, bcName, bcTime, bcPrice, bcDescription } = item;
  return (
    <div>
      <img alt='Bar' src={bcImg} />
      <h2>{bcName}</h2>
      <p>{bcTime}</p>
      <p>{bcPrice}</p>
      <p>{bcDescription}</p>
      <button onClick={onClickHandler}>Подробнее</button>
    </div>
  );
};

export default BarCrawlItem;
