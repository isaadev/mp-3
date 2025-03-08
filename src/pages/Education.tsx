import styled from "styled-components";
import { useEffect } from "react";

const MainWrapper = styled.main`
  background-color: #a9a09b;
  height: 70vh;
  width: 100%;
  padding: 1rem;
  
  color: black;

  @media screen and (max-width: 750px) {
    width: auto;
  }
`;

const Section = styled.div`
  border-left: 2px solid black;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 1rem;
  text-align: left;
`;

const SchoolTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const Subtext = styled.p`
  font-style: italic;
  
  margin-bottom: 0.6rem;
`;

const Image = styled.img`
 max-width: 40%;   
 max-height: 30%;
 margin: 0 auto;
 border-radius: 10%;
 
`;


export default function Education() {
    useEffect(() => {
    document.title = "Education | MP-3";
    });
    return (
    <MainWrapper>
      <h3>Education</h3>
      <Section>
        <Image src="./education.gif"/>
      </Section>
      <Section>
        <SchoolTitle>Boston University</SchoolTitle>
        <Subtext>Graduation: May 2025</Subtext>
        <Subtext>Major: Computer Science</Subtext>

        <SchoolTitle>Rhodes College</SchoolTitle>
        <Subtext>Transferred: May 2021</Subtext>
        <Subtext>Major: Computer Science</Subtext>

       
      </Section>
      
    </MainWrapper>
  );
};

