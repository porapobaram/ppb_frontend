import React from "react";

const BarCrawlPageComponent = ({ item }) => {
  const { bcImg, bcName, bcTime, bcPrice, bcDescription } = item;
  return (
    <div>
      <img alt="image" src={bcImg} />
      <h2>{bcName}</h2>
      <p>{bcTime}</p>
      <p>{bcPrice}</p>
      <p>{bcDescription}</p>
      <button onClick={() => {}}>Подробнее</button>
    </div>
  );
};

export default BarCrawlPageComponent;
