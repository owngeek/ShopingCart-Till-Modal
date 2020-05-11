import React, { Component } from 'react'
import {ButtonContainer} from "./Styled"
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                
<div className="container-fluid navbar">
    <Link to = "/">
<div className="fa-3x logo ">
  <i className="fas fa-stroopwafel fa-spin"></i>
</div>
</Link>
<Link to = "/">
<h3>Products</h3>
</Link>

<Link to="/Cart">
<ButtonContainer>
<i class="fas fa-cart-plus"></i>
<span>My Cart</span>
</ButtonContainer>
</Link>
</div>



            </div>
        )
    }
}
