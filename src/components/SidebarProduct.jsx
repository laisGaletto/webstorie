import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function SidebarProduct({ id, image, name, rate, price, removeProductFromCart }) {
  const [quantity, setQuantity] = useState(1)
  const [priceSum, setPriceSum] = useState(price)
  

  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button className="remove-product-btn" onClick={() => {removeProductFromCart(id)}}>
          <FontAwesomeIcon icon={faXmark}/>
        </button>

        <div className="details">
          <h4>{name}</h4>
          <p>{price}</p>
          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
              setPriceSum(e.target.value * price )
            }}
          />
          {priceSum > price && (
            <p className="price-sum">
              <b>Soma: </b>R${priceSum}
            </p>
          )}
        </div>
      </div>

      

      <div className="right-side">
        <img src={image} alt={name} />
      </div>
    </div>
  )
}