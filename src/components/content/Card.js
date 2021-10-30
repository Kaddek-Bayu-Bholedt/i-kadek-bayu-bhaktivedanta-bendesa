import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <a href="/">
      <div className="card">
        {
          props.dataCard.map((card) => {
            return (
              <>
                <div keys = {card.id} className={card.isReverse}>
                  <div className="text-overlay">
                    <h1>{card.title}</h1>
                    <p>{card.subTitle}</p>
                    <a href="/read">Read More</a>
                  </div>
                  <div className="card-img-overlay">
                    <img className="img-card" src={`/img/${card.img}`} alt=""/>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </a>
  )
}

export default Card
