import React, { useState } from "react";
import styled from "styled-components";
const Header = ({children, img, disableOverlay}) => {

  return (
  <Wrapper className="container-fluid">
      <figure className="row row-hero">
        <img src="../../public/media/img/exp.avif" className="col-md-6 img-hero" />
        <h3 className="col-md-6 hero-text">Reggio</h3>

      </figure>
    </Wrapper>)
  ;
};

const Wrapper = styled.section`
  .row-hero{
    justify-content: center;
    align-items: center;
  }
  .img-hero{
    height: 90%;
  }
  .hero-text {
    font-size: 80px;
    font-family: "Nippo";
    display: grid;
    place-items: center;
    text-align: center;
    gap: 2rem;
    color: rgb(0, 0, 0);
  }

`;

export default Header;
