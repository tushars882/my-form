import "./App.css";
import { useState } from "react";


function App() {
  const[email,setEmail]=useState('xyz@gmail.com');
  const[password,setPassword]=useState(1234);
  const[user,setUser]=useState([]);         //make this state for submission with input as arrays

  const Submit=(e)=>{
    
    console.log("print");
    e.preventDefault();
    
    const newUser={email,password};    //in this array all the values will be store
    setUser([...user,newUser]);                   //passing it to edit
    
    setEmail("");
    setPassword("");
    
    
    


  }
   return (
    <>
      
        <div className="container ">

        <form onSubmit={Submit}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className=" mt-6 col-sm-2 col-form-label " value={email} onChange={(e)=>{setEmail(e.target.value)}}>Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" value={password} onChange={(e)=>{setPassword(e.target.value)}}>Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <fieldset className="row mb-3">
    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked/>
        <label className="form-check-label" htmlFor="gridRadios1">
          First radio
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="gridRadios2">
          Second radio
        </label>
      </div>
      <div className="form-check disabled">
        <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
        <label className="form-check-label" htmlFor="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
      
    </>
  );
}

export default App;
