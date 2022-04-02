import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carInfo from "../carInfo";
const Home = () => {
  return (
    <Container>
      {carInfo.map((car) => (
        <Section
          key={car.id}
          title={car.title}
          description={car.description}
          backgroundImg={car.image}
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        ></Section>
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
