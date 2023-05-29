import React, {Component} from 'react';
import './style.css';

export default class HeaderComponent extends Component{
  render(){
    return(

      <header>

          <h1> TAX INVOICE </h1>        
          <address>
            <p> A1 Work Boots </p>
            <p> www.a1workboots.com.au </p>
            <p> sales@a1workboots.com.au </p>
            <p> 0414 292 542 </p>
          </address>

          <span>
            <img alt="MAHESH" src="https://logos.textgiraffe.com/logos/logo-name/Mahesh-designstyle-smoothie-m.png" className="rounded float-right align-top" />          
          </span>
                  
      </header>
    )
  }
}
