import React from 'react';

export default function Earnings(props){
  console.log(props.info)
  return (
  <div>
    <div className="box">
    <div>
    <h2>Customer Charges</h2>
    </div>
    <p>Total Tips: {props.info.total}</p>
    <p>Number of Meals: {props.info.count}</p>
    <p>Average Tips: {props.info.total / props.info.count || 0}</p>

 </div>
    
  </div>);
}