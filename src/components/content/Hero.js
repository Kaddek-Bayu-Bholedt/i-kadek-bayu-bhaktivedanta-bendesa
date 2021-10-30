import {useState} from 'react';
import HeroImg from './HeroImg';
import './Hero.css'
import Card from './Card';


const Hero = () => {

  const [getHeroImg] = useState([
    {id: 1, title: "Pura Lempuyang", subTitle: "Gates Of Heaven", img: "lempuyang.jpg"},
    {id: 2, title: "Pura Ulun Danu Batur", subTitle: "Meru Towers", img: "ulun-danu-beratan.jpg"},
    {id: 3, title: "Pura Tanah Lot", subTitle: "The Beauty Of South Sea", img: "tanah-lot.jpg"}
  ]);

  const [getCardImg] = useState([
    {id: 11, title: "Pura Taman Ayun", subTitle: "The Beauty Of The Garden Surounded By an artificial river", img: "taman-ayun.jpg", isReverse: "reverse"},
    {id: 12, title: "Pura Besakih", subTitle: "Mother Temple Of Hindu Bali", img: "besakih.jpg", isReverse: "card-overlay"},
    {id: 13, title: "Pura Tirta Gangga", subTitle: "Water Palace", img: "tirta-gangga.jpg", isReverse: "card-overlay"},
    {id: 14, title: "Pura Tirta Empul", subTitle: "The Holy Spring", img: "tirta-empul.jpg", isReverse: "card-overlay"}
  ])
  return (
    <div className="content">
      <HeroImg dataImg={getHeroImg} />
      <Card dataCard={getCardImg} />
    </div>
  )
}

export default Hero
