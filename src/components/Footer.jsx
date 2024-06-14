import React from "react";

export default function Footer() {
  return ( 
    <footer>
      <div className="page-inner-content content">
        <div className="download-options">
          <p>Baixe a nossa aplicação</p>
          <p>Baixe a nossa aplicação para Android e iOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            Web<span>Store</span>
          </h1>
          <p>
            Nosso objetivo é melhorar sua constância!
          </p>
        </div>
      </div>

      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2050 - Lais Galetto - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  )
}