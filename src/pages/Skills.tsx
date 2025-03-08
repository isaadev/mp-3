import styled from "styled-components";
import { useEffect } from "react";

const MainWrapper = styled.main`
  width:100%;
  background-color: #a9a09b;
  height: auto;
  padding: 1rem;
  color: black;
  @media screen and (max-width: 750px) {
    width: auto;
  }
`;

const SkillSection = styled.div`
  border-left: 2px solid black;
  padding-left: .5rem;
  margin: 1rem 0;
  text-align: left; 
`;

const SkillTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

export default function Skills(){
    useEffect(() => {
    document.title = "Skills | MP-3";
  });
  return (
    <MainWrapper>
      <h3>Skills</h3>
      
      <SkillSection>
        <SkillTitle>Programming</SkillTitle>
        <p>Python, Java, C, Bash, JavaScript, Assembly, HTML/CSS</p>
      </SkillSection>

      <SkillSection>
        <SkillTitle>Developer Tools</SkillTitle>
        <ul>
          <li>React</li>
          <li>TailwindCSS</li>
          <li>ExpressJS</li> 
          <li>NodeJS</li> 
          <li>MongoDB</li> 
          <li>Git/GitHub</li>
          <li>NumPy</li> 
          <li>Figma</li> 
          <li>Empirica</li>
        </ul>
      </SkillSection>

      <SkillSection>
        <SkillTitle>Languages</SkillTitle>
        <p>English, Arabic</p>
      </SkillSection>
    </MainWrapper>
  );
};


