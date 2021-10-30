import React from 'react';
import './Hero.css';

function HeroImg(props) {
  return (
    <a href="/">
      <div className="hero">
        {
          props.dataImg.map((img) => {
            return (
              <>
                <div className="overlay">
                  <h1>{img.title}</h1>
                  <p>{img.subTitle}</p>
                  <a href="/read">Read More</a>
                </div>
                <div className="img-overlay" keys = {img.id}>
                  <img src={`/img/${img.img}`} alt=""/>
                </div>
              </>
            );
          })
        }
      </div>
    </a>
  );
}

export default HeroImg
