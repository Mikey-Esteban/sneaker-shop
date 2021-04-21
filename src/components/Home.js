import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Navbar from "./Navbar";
import Sneaker from "./Sneakers/Sneaker";

const SneakersListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  const [sneakers, setSneakers] = React.useState([]);

  React.useEffect(() => {
    const fetch = () => {
      axios
        .get("http://localhost:3000/api/v1/sneakers")
        .then(response => {
          console.log(response);
          setSneakers(response.data.data);
        })
        .catch(error => console.log(error));
    };
    fetch();
  }, []);

  const sneakersList = sneakers.map(s => (
    <Sneaker
      key={s.id}
      attributes={s.attributes}
      images={s.attributes.sneaker_images}
    />
  ));

  return (
    <Fragment>
      <Navbar />
      <div id="checkConsoleCTA">Open console to check api call</div>
      <SneakersListWrapper>{sneakersList}</SneakersListWrapper>
    </Fragment>
  );
};

export default Home;
