import React, { Component } from 'react'
import Title from "./Title"
import Product from "./Product"
import {ProductConsumer} from "./context"
export default class ProductList extends Component {
    render() {
        return (
            <div className="container-fluid product_list">



                <div className="container">
               <Title title="Our" name="Products"/>
               <section className="basic-grid">
           <ProductConsumer>
{(value)=>{
    return(
value.products.map((product)=>{
return <Product
key = {product.id}
product={product}

/>

})
)
}}
           </ProductConsumer>



              </section>
              </div>

            </div>
        )
    }
}
