import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {ProductConsumer} from "./context"

export default class Product extends Component {
    render() {

const {img,id,price,title,inCart} = this.props.product

        return (
           
           
            
                <React.Fragment>
            <div className="card">
                <ProductConsumer>

{(value)=>{

return(
    <React.Fragment>
                <Link to= "/details">
                <img src={img} onClick={()=>{value.handleDetails(id)}}/>
                </Link>


{inCart?( 
<button className="cart_btn" onClick={()=>{
    value.addToCart(id)
    value.openModal(id)
    
    }} >
<i className="fas fa-cart-plus"></i>
</button>)
                :
                (<button className="cart_btn2" disabled={inCart?false:true}>
             <span>In Cart</span>
                </button>)}

               
                
                



                </React.Fragment>

)
            }}

</ProductConsumer>



<div className="footer-card">
<span>{title}  </span>
<h3>{price}</h3>
</div>





            </div>
       
        

         

         </React.Fragment>
          
      





        )
    }
}
