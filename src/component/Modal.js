import React, { Component } from 'react'
import {ButtonContainer} from "../component/Styled"
import { ProductConsumer } from './context'
import {Link} from "react-router-dom"

export default class Modal extends Component {
    render() {
        return (

<ProductConsumer>
 {(value)=>{
const {id,title,price,img} = value.modalProduct
const {modalOpen,closeModal} = value

     if(modalOpen === false){
         return null
     }else{

     
     
     return(



        


        <div className="wraper_modal">
        <div className="modal_box">
            <h5>Item Added To The Cart</h5>
            <img src={img}/>

           <h4> {title}</h4>
           <h3>Price:$ {price}</h3>
<Link to ="/">
<ButtonContainer className="store_btn" onClick={()=>{closeModal(id)}}>Store</ButtonContainer>
</Link>
<Link to ="/cart">
<ButtonContainer className="goto_btn" onClick={()=>{closeModal(id)}}>Go To Cart</ButtonContainer>
</Link>
    </div>
    </div>



     )
     }
 }}
      
   

          

      
       
            </ProductConsumer>
        )
    }
}
