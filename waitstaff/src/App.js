import React, { Component } from 'react';
import './App.css';
import Meal from './components/meal';
import Charges from './components/charges';
import Earnings from './components/earnings';

class App extends Component {
  
  constructor(props){
    super(props);
    window.app = this;
  this.state = {
    lastMeal:{
      price:0,
      tax:0,
      tipPercent:0,
      subTotal:0,
      tip : 0
    },
    earnings:{
      total:0.00,
      count:0
    }
  };
}
//{price,tax,tip}
submitForm = (formData)=>{
  let {price,tax,tip} = formData;
  price = Number(price);
  tax = Number(0.01 * tax);
  tip = Number(0.01 * tip);
  this.setState({
    lastMeal:{
      price:price,
      tax:tax,
      tipPercent:tip,
      subTotal:price + (price * tax),
      tip : price * tip
    },
    earnings:{
      total:this.state.earnings.total + (price * tip),
      count:++this.state.earnings.count
    }
  });
}
  render() {
    return (
      <div className="App container">
        <h1 className="col-full">Waitstaff Calculator</h1>
        <Meal className="col-half container" handleForm = {this.submitForm}/>
        <div className="col-half">
        <Charges info={{subTotal:this.state.lastMeal.subTotal, tip:this.state.lastMeal.tip}}/>
        <Earnings info={{total:this.state.earnings.total,count:this.state.earnings.count}}/>
        </div>
        <button onClick={(e)=>{
          e.preventDefault();
          this.setState({
                  lastMeal:{
                  price:0,
                  tax:0,
                  tipPercent:0,
                  subTotal:0,
                  tip : 0
                },
                earnings:{
                  total:0.00,
                  count:0
    }});
  }
} className="box" type="button">Reset</button>
        
        
        
      </div>
    );
  }
}

export default App;
