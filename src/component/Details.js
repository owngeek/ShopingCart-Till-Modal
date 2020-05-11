import React, { Component } from 'react'
import {ButtonContainer} from "./Styled"
import {Link} from "react-router-dom"
import {ProductConsumer} from "../component/context"


export default class Details extends Component {
    render() {
        return (
            <div className="container-fluid wrpr_detail">
           
           < ProductConsumer>
        
           {(value)=>{
           const {id,title,img,company,info,price} = value.detailProduct    
    return(
           <div className="container">


<h4 className="small_title">{title}</h4>

               <div className="col-sm-6 floatL">
<img src={img}></img>

               </div>
               <div className="col-sm-6 floatL">
               <h3 className="title_deatils">Model: {title}</h3>
               <h3 className="brand_deatils">MADE BY: {company}</h3>
               <h3 className="price_details">Price: {price}</h3>
               <h3 className="info_details">Some Info About Product :</h3>

<p className="paragraph_details">{info}
   </p>


   <Link to= "/">
<ButtonContainer className="store_btn">
    Back To Products
</ButtonContainer>
</Link>
<Link to= "/cart">
<ButtonContainer className="goto_btn">
   Add To Carts
</ButtonContainer>
</Link>

               </div>
               
           </div>
            )}}
           </ProductConsumer>

            </div>
        )
    }
}
