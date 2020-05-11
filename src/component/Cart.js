import React, { Component } from 'react'
import Title from "./Title"
import Column from "./Column"
import Item from "./Item"
import {ButtonContainer} from "./Styled"

export default class Cart extends Component {
    render() {
        return (
            <div className="container wrapper_cart" >
               <Title title="Your" name="Cart" /> 
     
             <Column/>
            <Item/>

<ButtonContainer className="button_clear">
    CLEAR CART
</ButtonContainer>

<div className="wrpr_total">
<h3>SUBTOTAL:<span>$ 34</span></h3>
<h3>TAX:<span>$ 3.4</span></h3>
<h3>TOTAL:<span>$ 37.4</span></h3>   
</div>           
            




            </div>
        )
    }
}
