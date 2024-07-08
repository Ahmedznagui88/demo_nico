import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
const ErrorScreen = () => {
  return (
    <Wrapper>
      <h3>Page not found</h3>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          reverse: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={500}
        height={500}
      />
      <Link className="btn btn-primary" to="/">
        Back home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-flexbox;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
    color: black;
  }
  .error {
    font-size: 50px;
    color: black;
  }
  .btn {
    border: solid 0.4px;
    color: black;
    padding: 0.4rem 1rem;
    font-size: 1.4rem;
    border-radius: 30px;
    font-weight: 100;
  }

  .btn:hover {
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
