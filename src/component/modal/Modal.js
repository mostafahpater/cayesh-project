import React from 'react'
import './modal.css'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
function Modal({ isOpen, onClose }) {
    const { nomineechosen } = useSelector(
        (state) => state.nominee
      );
      const dispatch=useDispatch()
  return (
    <div className={`custom-modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <span className="close-btn" onClick={()=>onClose(false)}>
        X
      </span>
      <h2>Success</h2>
      <div className='cards-data'>
      {nomineechosen?.map((item,index)=>(

        <Card {...item} key={index} />
        ))}
        </div>
    </div>
  </div>
  )
}

export default Modal
