import React from 'react';

export default function Charges(props){
  return (
  <div className="box">
    <div>
    <h2>Customer Charges</h2>
    </div>
    <p>SubTotal: {props.info.subTotal}</p>
    <p>Tip: {props.info.tip}</p>
    <p>Total: {props.info.subTotal + props.info.tip}</p>

  </div>);
}