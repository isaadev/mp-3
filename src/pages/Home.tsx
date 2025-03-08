import { useEffect } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  background-color: #a9a09b;
  height: 80vh;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: black;
  
  @media screen and (max-width: 750px) {
    width: auto;
    height: auto;
  }
  
`;

const StyledP = styled.p`
  text-align: center;
  font-size: calc(10px + 1vh);
`;

const Image = styled.img`
  max-width: 70%;   
  max-height: 50%;
  margin: 0 auto;
  border-radius: 10%;
  margin-bottom: 1rem;
`;

export default function Home() {
  useEffect(() => {
    document.title = "Home | MP-3";
  });
  return (
    <MainWrapper>
      <h3>Home</h3>
      <Image src="../../public/griffith.jpg"/>
      <StyledP>My name is Isa Alsafwah and I'm a senior at Boston University studying Computer Science. </StyledP>
      <StyledP>In this website, you will find details related to my education, experience, projects, skills and contact. Enjoy!</StyledP>
    </MainWrapper>
  );
};

