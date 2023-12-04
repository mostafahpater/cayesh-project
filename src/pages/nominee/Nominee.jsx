import React, { useEffect, useState } from "react";
import Card from "../../component/card/Card";
import "./nominee.css";
import { useDispatch, useSelector } from "react-redux";
import { getNominee, setNominee } from "../../redux/Slices/NomineeSlice";
import Modal from "../../component/modal/Modal";
import { useNavigate } from "react-router-dom";
function Nominee() {
  const userToken = localStorage.getItem('userToken')
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { nomineeData, nomineechosen } = useSelector((state) => state.nominee);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    } else {
      dispatch(getNominee());
    }
  }, [userToken]);

  const SelectNominee = (data) => {
    dispatch(setNominee(data));
  };
  return (
    <div>
          <button
            onClick={() => setModalOpen(!modalOpen)}
            style={{
              zIndex: 10,
              padding: "10px 30px",
              fontSize: "20px",
              position: "fixed",
              bottom: "30px",
              right: "30px",
              backgroundColor: "#BF9100",
              color: "#fff",
              borderRadius: "7px",
            }}
          >
            Submit Ballot Button
          </button>
          <Modal isOpen={modalOpen} onClose={setModalOpen} />
          <div className="category">
            {nomineeData?.data?.cardData?.category1[0].category}
          </div>
          <div className="cards-data">
            {nomineeData?.data?.cardData?.category1?.map((item, index) => (
              <Card
                {...item}
                key={index}
                onButtonClick={() => SelectNominee(item)}
              />
            ))}
          </div>
          <div className="cards-data">
          <div className="category">
            {nomineeData?.data?.cardData?.category2[0].category}
          </div>
            {nomineeData?.data?.cardData?.category2?.map((item, index) => (
              <Card
                {...item}
                key={index}
                onButtonClick={() => SelectNominee(item)}
              />
            ))}
          </div>
        
    
    </div>
  );
}

export default Nominee;
