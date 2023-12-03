import React from 'react'
import './card.css'
const Card = ({ title,  imageUrl ,onButtonClick}) => {
    console.log(typeof imageUrl)
    return (
      <div className="card">
        <form>

        <img src={require('../../assets/34999535.jpg')} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
        </div>
        {onButtonClick&&<button onClick={onButtonClick} type='button' className='card-btn'>Select</button>}
        </form>
      </div>
    );
}

export default Card
