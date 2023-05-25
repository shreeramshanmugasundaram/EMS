import React from "react";
import "./Popup.css";
import Pana from "../Images/popup.jpeg";
import Close from "../Images/icons/close.svg";
const Popup = ({ setPopup }) => {
  return (
    <div className="PopupWapper">
      <div className="Popup">
        <img src={Pana} alt="popup" />
        <img
          src={Close}
          alt="closelettericon"
          onClick={() => setPopup(false)}
        />
      </div>
    </div>
  );
};

export default Popup;
