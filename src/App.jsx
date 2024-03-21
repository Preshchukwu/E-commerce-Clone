import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import Header from './components/Header'
import Nav from './components/Nav'
import Category from './components/Category'

function App() {
  const productContainer = [
    {
      productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/8265531/1.jpg?7006`,
      productName: `ADIDAS Core Sneakers `,
      productPrice: `#40,000`,
      productDescription: `+ shipping from ₦ 250 to LEKKI-AJAH`
    },

    {
      productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/3180331/1.jpg?8524`,
      productName: `ASHION 2024 Men's Casual`,
      productPrice: `#30,000`,
      productDescription: `+ shipping from ₦ 250 to LEKKI-AJAH`
    },

    {
      productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/7265531/1.jpg?2899`,
      productName: `ALagzi 2024 Ladies Fashion`,
      productPrice: `#28,000`,
      productDescription: `+ shipping from ₦ 250 to LEKKI-AJAH`
    },

    {
      productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/042576/1.jpg?2247`,
      productName: `Mens Casual High-Top`,
      productPrice: `#50,000`,
      productDescription: `+ shipping from ₦ 250 to LEKKI-AJAH`
    },

    {
      productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/7212072/1.jpg?0556`,
      productName: `Monospec Sneakers - White`,
      productPrice: `#37,000`,
      productDescription: `+ shipping from ₦ 250 to LEKKI-AJAH`
    },

    {
      productImage: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/536976/1.jpg?9999`,
      productName: `Air Force Wind`,
      productPrice: `#53,000`,
      productDescription: `+ shipping from ₦ 250 to LEKKI-AJAH`
    },
  ]

  return (
    <>
       <div className="parentDiv">
          <Header></Header>
          <Nav></Nav>
          <div className="categoryAndProductContainer">
            <div className="categoryContainer">
              <Category></Category>
            </div>


           <div className="productContainer">
             {
                productContainer.map((show)=>{
                    return(
                      <Product productImage={show.productImage} productName={show.productName} productPrice={show.productPrice} productDescription={show.productDescription} ></Product>
                    )
                })
              }
           </div>
          </div>
       </div>
    </>
  )
}

export default App
