import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  h1 {
    padding-left: 100px;
    font-style: italic;
    font-weight: 100;

    cursor: pointer;
  }
`;

const Tabs = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-around;

  cursor: pointer;

  p:hover {
    border-bottom: 3px solid #efefef;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div id="header">
        <h1>KICKSPIRE</h1>
      </div>
      <Tabs id="tabs">
        <p>Our story</p>
        <p>Shop</p>
        <p>Contact</p>
      </Tabs>
    </Wrapper>
  );
};

export default Navbar;
