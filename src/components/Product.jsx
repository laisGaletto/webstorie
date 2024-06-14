import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({id, image, name, rate, price, addProductToCart}) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="rate">{rate}</p>
      <p className="price"> <span>R$</span>{price}</p>

      <div className="buttons">
        <Link to="/pruducts/123/checkout" className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>

        <button onClick={() => addProductToCart(id)} className="btn-icon add-to-card-btn">
        <span>Adicionar ao carrinho</span>
        <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  )
}