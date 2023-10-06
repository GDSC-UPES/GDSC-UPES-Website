import React from 'react'
import  eventDetailHeroStyles from './eventStyles/EventHeroStyles.module.css'

const Events = () => {
  return (
    <div>
       <EventDetailHero eventImageURL={'./assets/image 41.svg'} eventName={'Figma Foombaloomba'}  eventDescription = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur, temporibus possimus molestiae nostrum dolorum beatae quae dicta ipsa, consequuntur, ratione in tempora exercitationem quo. Commodi neque numquam error eius odio obcaecati? aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa AAAAAAAAAAAAAAAAA A         A A A A SDAWDA ASD AGASD ASFG qe asfaffaffafascacadvadvadadvava'} eventDate={'05 Oct - 10 Oct'} eventTime={'10:00 AM to 5:00 PM'} eventVenue={'11th Block'} eventYear={'2023'} eventLocation={'UPES Bidholi'}></EventDetailHero>
    </div>
   
  )
}
const EventDetailHero = ({eventImageURL,eventName,eventDescription,eventDate,eventYear,eventVenue,eventLocation,eventTime}) => {
  
  function handleWorkshopClick (){
    console.log('workshop clicked');
  }
  function handleRegisterClick(){
    console.log('register is clicked');
  }
  return (
    
       <div className={ eventDetailHeroStyles.gridContainer}>
        <div className={ eventDetailHeroStyles.image} >
          <img src={require(`${eventImageURL}`)} alt='event logo'></img>
        </div>
        <div className={ eventDetailHeroStyles.containerHoldingEventDetails}>
        <div className={ eventDetailHeroStyles.eventName}>
          {eventName}
        </div>
        <div className={ eventDetailHeroStyles.workshopContainer}>
          <button className={ eventDetailHeroStyles.workshopButton} onClick={handleWorkshopClick}>
              
              WorkShop
          </button>
        </div>
        <div className={ eventDetailHeroStyles.description}>
          <p>
          {eventDescription}
          </p>
         
        </div>
        <div className={eventDetailHeroStyles.sidebysideButtons}>
        
        <div className={ eventDetailHeroStyles.sidebysideButtonsregisterContainer}>
          <button className={ eventDetailHeroStyles.registerButton} onClick={handleRegisterClick}>Register</button>
        </div>

        <div className={ eventDetailHeroStyles.sidebysideButtonsworkshopContainer}>
          <button className={ eventDetailHeroStyles.workshopButton} onClick={handleWorkshopClick}>Workshop</button>
        </div>
        
        </div>
        <div className={eventDetailHeroStyles.registerContainer} onClick={handleRegisterClick}>
          <div className={eventDetailHeroStyles.registerButton}>
            Register
          </div>
        </div>
        
        </div>
       
        <div className={ eventDetailHeroStyles.footer}>
          <div className={ eventDetailHeroStyles.ColumnFooter}>
            <div style={{
            height:'50%'
          }}>
             <div className={ eventDetailHeroStyles.footerContent}>
                <img src={require('./assets/Calendar (1).png')} className={ eventDetailHeroStyles.pngimage} alt='calander'></img>
             </div>
            </div>
            <div style={{
              height:'25%',
         
            }}>
               <div className={ eventDetailHeroStyles.footerContent}>
                  <div className={ eventDetailHeroStyles.footerText1}>
                      {eventDate}
                  </div>
                  

              </div>
            </div>
            <div style={{
              height:'25%',
         
            }}>
               <div className={ eventDetailHeroStyles.footerContent}>
             
                <div className={ eventDetailHeroStyles.footerText2}>
                     {eventYear}
                  </div>
              </div>
            </div>
          </div>
          <div className={ eventDetailHeroStyles.ColumnFooter}>
            <div style={{
             
            height:'50%'
          }}>
               <div className={ eventDetailHeroStyles.footerContent}>
               <img src={require('./assets/Clock (2).png')} className={ eventDetailHeroStyles.pngimage} alt='clock'></img>
              </div>
            </div>
            
            <div style={{
              height:'35%',
              margin:'auto 0',
              
            }}>
              <div className={ eventDetailHeroStyles.footerContent}>
                <div className={ eventDetailHeroStyles.footerText1}>
                    {eventTime}
                </div>
              </div>
            </div>
          </div>
          <div className={ eventDetailHeroStyles.ColumnFooter}>
            <div style={{
             
            height:'50%'
          }}>
              <div className={ eventDetailHeroStyles.footerContent}>
              <img src={require('./assets/Map Marker (1).png')} className={ eventDetailHeroStyles.pngimage} alt='map'></img>
              </div>
            </div>
            <div style={{
              height:'25%',
         
            }}>
              <div className={ eventDetailHeroStyles.footerContent}>
                <div className={ eventDetailHeroStyles.footerText1}>
                    {eventVenue}
                </div>
              </div>
            </div>
            <div style={{
              height:'25%',
         
            }}>
               <div className={ eventDetailHeroStyles.footerContent}>
                <div className={ eventDetailHeroStyles.footerText2}>
                  {eventLocation}
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}
export default Events