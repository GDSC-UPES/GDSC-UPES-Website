import React from 'react'
import Desc from "../Events-Details/Desc"
import Details from "../Events-Details/Details"
import Sponsors from "../Events-Details/Sponsors"
import Speakers from './Speakers'

const EventsDetails = () => {
  return (
    <div>
      <Desc/>
      <Details/>
      <Speakers/>
      <Sponsors/>
    </div>
  )
}

export default EventsDetails
