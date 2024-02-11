import React, { useState } from "react";
import axios from 'axios'
import { Navigate, useNavigate} from "react-router-dom";

const NewTicket = () => {
  let navigate = useNavigate();
  const [passenger, setPassenger] = useState({
    passengerName: "",
    fromStation: "",
    toStation: "",  
    dateOfTravel: "",
    trainNo: ""
  });

  const {passengerName, fromStation, toStation, dateOfTravel, trainNo } = passenger;
  const onInputChange = e => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/ticket/bookticket", passenger);
    console.log("booked successfully");
   
   
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Book your Ticket</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="passengerName"
              value={passengerName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter from station"
              name="fromStation"
              value={fromStation}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter to station"
              name="toStation"
              value={toStation}
              onChange={e => onInputChange(e)}
            />
            </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter date of travel"
              name="dateOfTravel"
              value={dateOfTravel}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the train number"
              name="trainNo"
              value={trainNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Book A Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;