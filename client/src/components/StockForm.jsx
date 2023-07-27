import React from "react";
import { useContext } from "react";
import { StockDataContext } from "../context/StockProvider";
import "../components/css/StockForm.css"
import {  useRef } from "react";




const StockForm = () => {

  const stockContext = useContext(StockDataContext);

  const symbolInputRef = useRef();

  const checkUpperCase = (e) => {
    if (/^[A-Z]*$/.test(symbolInputRef.current.value)) {
      return true;
    }
    else {
      alert("Only UPPERCASE allowed!");
      return false;
    }
}


  const postData = async (e) => {
    e.preventDefault();

    if (checkUpperCase(e)) {
      const formData = new FormData(e.target);
      const symbol = formData.getAll("symbol");
      stockContext.setSymbol(symbol);
      const date = formData.getAll("date");
      stockContext.setDate(date);
    }
    else {
  
      return;
    }
  }

  return (
    <div>
      <form onSubmit={postData} >  
       
        <table>
          <tbody>
            <th>Enter Details for Stock Information</th>
            <tr>
              <td><label >Stock Symbol:</label></td>
              <td><input name="symbol" type={"text"} placeholder={"Enter in Uppercase Only"} required ref={symbolInputRef}/></td>
            </tr>
            <tr>
              <td><label >Stock Date:</label></td>
              <td><input name="date" type={"date"} required/></td>
            </tr>
            <tr>
              <td>
                <button aria-label="sybmit" type={"submit"}>Get Stock Information</button></td>
            </tr>
          </tbody>
        </table>
        
  
        
        
        
   
    
       
       
          
      
      </form>
    </div>
  );
};

export default StockForm;

