import React, { Component } from 'react'

import {storeProducts,detailProduct} from"../data"

const ProductContext = React.createContext()
 class ProductProvider extends Component {
    state ={
        products:storeProducts,
        detailProduct:detailProduct,
        modalOpen:false,
        modalProduct:detailProduct
   

    }

  


    getItem = (id) =>{
       const product = this.state.products.find(item=>(item.id === id))
        return product

    }

    handleDetails = (id) =>{
const product = this.getItem(id)
this.setState({
    detailProduct:product 
})
    }

addToCart = (id) => {
let tempProducts = [...this.state.products]
const index = tempProducts.indexOf(this.getItem(id))
const product = tempProducts[index]
product.inCart = false;

this.setState({
  products:tempProducts
})

console.log("add btn clicked")
    }

openModal=(id)=>{
   const product = this.getItem(id)
   this.setState({
    modalOpen:true,
    modalProduct:product
   })
   console.log("openmodal click")
}
closeModal=(id)=>{
 
    this.setState({
        modalOpen:false,
       
       })

}




    render() {
       
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails : this.handleDetails,
                addToCart : this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal
            }}>

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider,ProductConsumer}