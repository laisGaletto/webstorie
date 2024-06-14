import React, { useState } from "react";
import { Link } from "react-router-dom"
import {faBars, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navbar({setShowSidebarCart, selectedProducts}) {
  const [show, setShow] = useState(false)

  return (
    <div className="nav">
      <h1 className="logo">
        Web<span>Store</span>
      </h1>
      <nav className={`${show && "show"} `}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/account">Conta</Link>
          </li>
        </ul>
      </nav>
        
        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" />
          <FontAwesomeIcon icon={faSearch}/>
          </div>

          <button className="shopping-cart" onClick={() => setShowSidebarCart(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="products-count">{selectedProducts.length}</div>
          </button>

          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} /> 
          </button>
        </div>
    </div>
  );
}