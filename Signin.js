import React from "react"
import './Signin.css'
function Signin(props){
        return(

    <div>
             
             <div class ="show"> 
        <div class="vh-100" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" >
                <div class="card-body p-5 text-center">
      
                  <h3 class="mb-5">Sign in</h3>
      
                  <div class="form-outline mb-4">Email
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                    
                  </div>
      
                  <div class="form-outline mb-4">Password
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                    
                  </div>
      
                 
                  
      
                  <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
      
                  
    
                 
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

           </div>

        );
} 
export default Signin;