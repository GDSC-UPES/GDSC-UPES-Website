import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "../Event.css"

export default function Events_Card(props) {
  const [completed, setcompleted] = useState(false);
  const OnClickButton = () => {
    setcompleted(!completed);
  };

  return (
    <>
      <div className="event_container">
        <div className="eventDetail_container">
          <div className="event_date">
            <h6>Events On : {props.events_on}</h6>
          </div>
          <img src={props.template} alt={props.event_name} />
          <div className="event_details">
            <Link className="link" to={props.eventLink}>
              <h3>{props.event_name}</h3>
            </Link>

            <Link className="link" to={props.eventLink}>
              <p>{props.event_para}</p>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}