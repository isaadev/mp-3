import { useEffect } from "react";
import styled from "styled-components";

const MainWrapper = styled.main`
  background-color: #a9a09b;
  height: auto;
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

const JobTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const Subtext = styled.p`
  font-style: italic;
  margin-bottom: 0.6rem;
`;


const Image = styled.img`
 max-width: 60%;   
 max-height: 50%;
 margin: 0 auto;
 border-radius: 10%;
 
`;



export default function Experience() {
    useEffect(() => {
    document.title = "Experience | MP-3";
    });
    return (
    <MainWrapper>
      <h3>Experience</h3>
      <Section>
        <JobTitle>Fullstack Research Developer</JobTitle>
        <Subtext>
                Designed and developed a Human vs. Human marketplace on the
                Empirica platform, incorporating multi-user games to simulate
                warranted markets for producers and consumers.
              </Subtext>

        <Subtext>
                Utilized React and TailwindCSS to create a responsive and
                intuitive UI, translating Figma designs into a fully functional
                frontend.
        </Subtext>

      </Section>

      <Image src="/experience.gif" alt="Hire me gif"/>
    </MainWrapper>
  );
};
