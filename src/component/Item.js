import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
          


            <div className="row cart_item">
            <div className="col-sm-2 ">
                <img src="img/product-1.png"/>
            </div>
            <div className="col-sm-2">
                <span>Samsung S7</span>
            </div>
            <div className="col-sm-2">
                <span>16</span>
            </div>
            <div className="col-sm-2">
<button className="plus_btn">-</button>
<span className="count">1</span>
<button className="plus_btn">+</button>
       </div>
            <div className="col-sm-2">
                <i className="fas fa-trash"></i>
            </div>
            <div className="col-sm-2">
            <span>Item Total: $ 16</span>
            </div>
            
                             </div>



        )
    }
}
