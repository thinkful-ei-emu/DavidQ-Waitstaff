import React from 'react';


export default function Meal(props){
  return (
  <div className = {`box ${props.className}`}>
    <div className ="title col-full"><h2>Enter the Meal Details</h2></div>
    <form className="col-center" onSubmit={(e)=>{e.preventDefault(); props.handleForm({price:e.target.price.value,tax:e.target.tax.value,tip:e.target.tip.value});}}>
    <label htmlFor="price">Base Meal Price: $</label>
    <input className='box' name="price" type="number"  placeholder={9.99} className="box"/>
    <label htmlFor="tax">Tax Rate: %</label>
    <input className='box'min="0"  name="tax" type="number" className="box"/>
    <label htmlFor="tip">Tip Percentage: %</label>
    <input className='box' min="0"  name="tip" type="number" className="box"/>
    <button type="submit">Submit</button><button type="reset">Cancel</button>
    </form>
  
  </div>);
}