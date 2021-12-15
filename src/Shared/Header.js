import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="navbar-brand ms-5 fs-2" >INFIGON</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link active fw-bold  " aria-current="page" href="/" style={{color:"#0b0080"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold" href="/" style={{color:"#0f3b88"}}>How We Help</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold" href="/" style={{color:"#0f3b88"}}>Programs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active fw-bold" href="/" style={{color:"#0f3b88"}}>FAQS</a>
        </li>
        <li className="nav-item">
        <button type="button" class="btn text-white rounded-pill ps-5 pe-5 ms-3 " style={{backgroundColor:"#0f3b88"}}>Get in Touch</button>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
};

export default Header;