import React, { useState } from 'react';
import { getTicket } from '../services/TicketService';
import { useEffect } from 'react';


//var pnrNum;
function SearchTicket() {
  const [pnrNum, setPnrNum] = useState("");
  const [passengerInfo, setPassengerInfo] = useState("");

  
  
  //button set value call api
  const handleButtonClick = ()=> {
    if(pnrNum){
      getTicket(pnrNum).then((response)=>{
        setPassengerInfo(response.data);
          }).catch(error=>{
        console.error('Error fetching passenger information',error)
        })
    };
  };


  return (
    <div>
      <label>
        Enter Ticket Number:
        <input
          type="text"
          value={pnrNum}
          onChange={(e) => setPnrNum(e.target.value)} //input get value
        />
      </label>
      <br></br><br></br>
      <button onClick={handleButtonClick}>Get Passenger Information</button>

      {passengerInfo && (
        <div>
          <h2>Passenger Information</h2>
          <pre>{"PNR  :"+passengerInfo.pnr}</pre>
          <pre>{" Passenger Name :"+passengerInfo.passengerName}</pre> 
          <pre>{"From Station :"+passengerInfo.fromStation}</pre> 
          <pre>{"To Station :"+passengerInfo.toStation}</pre>
           <pre>{"Date of travel :"+passengerInfo.dateOfTravel}</pre>
          x <pre>{"Train Number :"+passengerInfo.trainNo}</pre>
           <pre>{"Date of booking"+passengerInfo.dateOfBooking}</pre>
           <pre>{"Booking Status :"+passengerInfo.bookingStatus}</pre>
           <pre>{"Ticket Fare  :"+passengerInfo.ticketFare}</pre>
        </div>
      )}
    </div>
  );
}


export default SearchTicket;






