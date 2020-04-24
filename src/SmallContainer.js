import React from "react";
import "./SmallContainer.css";

const SmallContainer = (props) => {
  return (
    <div className="containerS">

      <div className="Ssocial">
        <div className="Spage">
          <h3>{props.page}</h3>
        </div>
        <div className="Slogo">
          <img src={props.image2} alt="" />
        </div>
      
      </div>
      
      <div className="SNumbers">
        <div className="Value">
          <h2>{props.value}</h2>
        </div>

        <div className="proc">
          <div className="arrow2">
            <img src={props.Up2} alt="" />
          </div>
          <div className="todayNumber">
            <h3>{props.procValue}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallContainer;
