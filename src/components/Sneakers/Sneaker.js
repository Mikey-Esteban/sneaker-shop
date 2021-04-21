import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 350px;
  width: 300px;
  margin: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border: 1px solid #efefef;

  cursor: pointer;
`;

const ImageWrapper = styled.div`
  img {
    max-width: 300px;
    height: 200px;
    filter: grayscale(95%);
    transition: all ease-in-out 50ms;
  }

  img:hover {
    filter: grayscale(0%);
  }
`;

const Sneaker = props => {
  const name = props.attributes.name;
  const price = props.attributes.price;
  const images = props.images;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={images[0].url} alt={images[0].title} />
      </ImageWrapper>
      <div id="name">{name}</div>
      <div id="price">{price}.00 USD</div>
    </Wrapper>
  );
};

export default Sneaker;
