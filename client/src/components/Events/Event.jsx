import React from "react";
import Events_Card from "./components/Events_Card";
import EventsData from "./data/EventsData";


export default function Event() {
  const data = (val, i) => {
    console.log(val.template && "correct");
    return (
      <>
      {val.template && val.events_on && val.event_name ? <Events_Card
        template={val.template}
        events_on={val.events_on}
        event_name={val.event_name}
        event_para={val.event_para}
      /> : <div className = "_message"><h6>No Events Available Right Now</h6></div>
  }
      </>
    );
  };
  return (
      <div id="egg">
        <div className="container">
          <div className="heading-events">
            <h2 class>Past Events...</h2>
            <p>Archive extraordinare of our past events</p>
          </div>

          <div className="container">
            <div className="cards">
              {EventsData.map(data)}
            </div>

            <button className="view-btn">View all</button>
          </div>

          <div class="container-sponsor">
            <div class="heading-events">
              <h2 class>Our Partners</h2>
              <p>Archive extraordinare of our past events</p>
            </div>

            <div class="container-sponsor">
              <div className="partner-cards">
                <img src="https://github.com/GDSC-UPES/GDSC-UPES-Website/blob/main/assets/illustrations/events-partner-1.png?raw=true" alt="" />
                <img src="https://github.com/GDSC-UPES/GDSC-UPES-Website/blob/main/assets/illustrations/events-partner-2.png?raw=true" alt="" />
                <img src="https://github.com/GDSC-UPES/GDSC-UPES-Website/blob/main/assets/illustrations/events-partner-3.png?raw=true" alt="" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
  );
}