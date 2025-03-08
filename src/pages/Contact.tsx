import styled from "styled-components";
import { useEffect } from "react";

const MainWrapper = styled.main`
  background-color: #a9a09b;
  height: auto;
  width:100%;
  padding: 1rem;
  color:black;

  @media screen and (max-width: 750px) {
    width: auto;
  }
`;

const ContactSection = styled.div`
  border-left: 2px solid black;
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;
`;

const ContactTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const ContactLink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
 max-width: 60%;   
 max-height: 50%;
 margin: 0 auto;
 border-radius: 10%;
 
`;


export default function Contact(){
  useEffect(() => {
    document.title = "Contact | MP-3";
  });
  return (
    <MainWrapper>
      <h3>Contact</h3>

      <ContactSection>
        <ContactTitle>Links</ContactTitle>
        <ContactLink href="https://www.linkedin.com/in/isaals/" target="_blank">LinkedIn</ContactLink>
      </ContactSection>

      <Image src="./public/contact.gif"/>
    </MainWrapper>
  );
};


