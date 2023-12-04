import React from 'react'
import './card.css'
import { useSelector } from 'react-redux';
const Card = ({ title,  onButtonClick,category}) => {
  const { nomineechosen } = useSelector((state) => state.nominee);
    return (
      <div className="card">
        <form>

        <img src={require('../../assets/34999535.jpg')} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
        </div>
        {onButtonClick&&<button onClick={onButtonClick} 
        type='button' className='card-btn'
        disabled={nomineechosen.find((element) => element.category===category)}
        >Select</button>}
        </form>
      </div>
    );
}

export default Card
