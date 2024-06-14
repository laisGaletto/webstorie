import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";

export default function HomePage({products, setShowSidebarCart , showSidebarCart, addProductToCart, selectedProducts, cartTotal, removeProductFromCart}) {
  
  return <>
      <Header />
    <SidebarCart
      removeProductFromCart={removeProductFromCart}
      setShowSidebarCart={setShowSidebarCart}
      showSidebarCart={showSidebarCart}
      selectedProducts={selectedProducts}
      cartTotal={cartTotal}
    />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Produtos Selecionados</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
        <ProductsList addProductToCart={addProductToCart} products={products} />
        </div>  
      </div>
    <ExclusiveSection />
    <TestimonialsList />
  </>
}