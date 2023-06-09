import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer className="py-[1.25rem] px-[2rem] ">
        <div className="tour-info">
          <h4 className="heading">{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readmore)} className="capitalize">
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn uppercase" onClick={() => removeTour(id)}>
          not intersted
        </button>
      </footer>
    </article>
  );
};

export default Tour;
