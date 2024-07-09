import React, { useState } from "react";
import styled from "styled-components";
const Header = ({ children, img, disableOverlay }) => {
  return (
    <Wrapper className="container-fluid">
      <figure className="row row-hero">
        <img
          src="../../public/media/img/exp.avif"
          className="col-md-6 img-hero"
        />
        <div className="col-md-6 div-svg">
          <div className="hero-text1" >
          <h3 className="hero-text">RE</h3>
          </div>
          <div className='hero-text2' >
          <h3 className="hero-text">G</h3>
          <h3 className="hero-text">G</h3>
          </div>
          <div className='hero-text3' >
          <h3 className="hero-text">IO</h3>
          </div>
{/*           <svg
            width="327"
            height="327"
            viewBox="0 0 327 327"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="166.693"
              y="121.924"
              width="172.426"
              height="54.2822"
              transform="rotate(-45 166.693 121.924)"
              fill="#FC0000"
            />
            <rect
              width="172.426"
              height="54.2822"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 166.693 205.076)"
              fill="#FC0000"
            />
            <path
              d="M160.308 121.924L38.3841 0.000283142L0.000736967 38.3836L121.924 160.307L160.308 121.924Z"
              fill="#FC0000"
            />
            <rect
              x="160.308"
              y="205.076"
              width="172.426"
              height="54.2822"
              transform="rotate(135 160.308 205.076)"
              fill="#FC0000"
            />
          </svg> */}
        </div>
      </figure>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .row-hero {
    justify-content: center;
    align-items: center;
  }
  .img-hero {
    height: 90%;
  }
  .hero-text {
    font-size: 180px;
    font-family: 'SUPREME';
    font-weight: 900;
    display: grid;
    place-items: center;
    text-align: center;
    color: white;
  }
  .div-svg {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-text1 {
    display: flex;
    width: 50vw;
  }

  .hero-text2 {
    display: flex;
    justify-content: space-around;
    width: 50vw;
  }

  .hero-text3 {
    display: flex;
    justify-content: flex-end;
    width: 50vw;
  }
`;

export default Header;
