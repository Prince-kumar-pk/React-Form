import React from 'react'

export default function Form() {
  return (
    <div>
        <h1>Registeration Form</h1>
    <p>Please fill the form with required details</p>
    <form >
        <fieldset name="Registeration Form">
          <label for="fname">First  Name :
            <input type="text" placeholder="Enter Your First Name" name="fname" id="fname" required />
          </label>
          <label for="lname">Last Name :
          <input type="text" placeholder="Enter Your last name" name="lname" id="lname" required />
        </label>
          <label for="dob">D.O.B :
          <input type="date" placeholder="D.O.B" name="dob" id="dob" required />
        </label> 
          <label for="email">Email :
          <input type="text" placeholder="Enter Email" name="email" id="email" required />
        </label>
          <label for="phone">Phone Number :
          <input type="number" placeholder="Enter phone  number" name="phone" id="phone" required />
        </label>
          <label for="psw">Password :
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
        </label>
          
          <hr/>
        </fieldset>
        <input type="checkbox" name="check" id="check"/> <span> By creating an account you agree to our <a href="#/">Terms & Privacy</a>.</span>
          <button type="submit" class="registerbtn">Register</button>
       
      
       
        
      </form>
    </div>
  )
}
