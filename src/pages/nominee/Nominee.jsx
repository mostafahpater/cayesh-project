import React, { useEffect, useState } from 'react'
import Card from '../../component/card/Card';
import './nominee.css'
import { useDispatch, useSelector } from 'react-redux';
import { getNominee, setNominee } from '../../redux/Slices/NomineeSlice';
import Modal from '../../component/modal/Modal';
function Nominee() {
  const [modalOpen, setModalOpen] = useState(false);
  const { nomineeData,nomineechosen,  loading, error } = useSelector(
    (state) => state.nominee
  );
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(getNominee())
  }, [])
 
      const SelectNominee = (data) => {
        dispatch(setNominee(data))
        // console.log('object')
        // You can add your own logic here
      };
      console.log(nomineechosen)
  return (
    <div>
      <button onClick={()=>setModalOpen(!modalOpen)} style={{zIndex:10,padding:'10px 30px',fontSize:'20px',position:'fixed',bottom:'30px',right:'30px',backgroundColor:'#BF9100',color:'#fff',borderRadius:'7px'}}>Submit Ballot Button</button>
      <Modal isOpen={modalOpen} onClose={setModalOpen} />
          <div className='category'>{nomineeData?.data?.cardData?.category1[0].category}</div>
         <div className='cards-data'>
      {nomineeData?.data?.cardData?.category1?.map((item,index)=>(

        <Card {...item} key={index} onButtonClick={()=>SelectNominee(item)}/>
        ))}
        </div>
        <div className='category'>{nomineeData?.data?.cardData?.category2[0].category}</div>
         <div className='cards-data'>
      {nomineeData?.data?.cardData?.category2?.map((item,index)=>(

        <Card {...item} key={index} onButtonClick={()=>SelectNominee(item)}/>
        ))}
        </div>
    </div>
  )
}

export default Nominee
