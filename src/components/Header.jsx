import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>Dê um upgrade no seu Setup</h2>
          <p>Sucesso nem sempre tem haver com grandeza. Tem haver com consistência, trabalho duro consistente supera o sucesso e porque não se presentear com um upgrade no seu local de trabalho.</p>
          <Link to="/products" className="see-more-btn">
            <span>Ver agora</span>
            <FontAwesomeIcon icon={faChevronRight}/>
          </Link>
        </div>

        <div className="right-side">
          <img src="/images/header-image.png" alt="Products" />
        </div>
      </div>
    </header>
  )
}