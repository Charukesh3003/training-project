import React from "react";
import './CancelAppointment.css';
function CancelAppointment(props) {
    return (
      <div class="vh-100" >
<div class="card text-center " >
    
    <div class="card-body "id="car" >
      <h5 class="card-title" >Cancel Appointment</h5>
      <div>
        <div class="card " >
            <div class="card-body">
           
              <p class="card-text">All the booked appointments will be shown in the table format</p>
              <table class="table table-dark table-striped">
                <thead>
                    <tr>
                      <th scope="col">date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Cancel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
                      <td>  12/12/2022</td>
                      <td>12.30AM</td>
                      <td><button type="button" class="btn btn-danger">CancelAppointment</button></td>
                    </tr>
		    <tr>
                    <td>  12/12/2022</td>
                      <td>12.30AM</td>
                      <td><button type="button" class="btn btn-danger">CancelAppointment</button></td>
                    </tr>
		    <tr>
                    <td>  12/12/2022</td>
                      <td>12.30AM</td>
                      <td><button type="button" class="btn btn-danger">CancelAppointment</button></td>
                    </tr>
                    
                   
                  </tbody>
              </table>
            </div>
          </div>
      </div>
      </div>
    
  
    </div>
</div>
    );
  }

export default CancelAppointment;
