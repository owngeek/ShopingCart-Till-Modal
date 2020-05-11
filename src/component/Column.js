import React, { Component } from 'react'

export default class Column extends Component {
    render() {
        return (
            <div className="row" style={{marginTop:20}}>
               <div className="col-sm-2 wrap_table">PRODUCTS</div>
                  <div className="col-sm-2 wrap_table">NAME OF PRODUCT</div>
                  <div className="col-sm-2 wrap_table">PRICE</div>
                  <div className="col-sm-2 wrap_table">QUANTITY</div>
                  <div className="col-sm-2 wrap_table">REMOVE</div>
                  <div className="col-sm-2 wrap_table">TOTAL</div>  
                 </div>
        )
    }
}
