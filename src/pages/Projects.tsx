import styled from "styled-components";
import Calculator from "../components/Calculator";
import { useEffect } from "react";

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

const ProjectSection = styled.div`
    text-align: left; 

    border-left: 2px solid black;
    padding-left: 1rem;
    margin: 1rem 0;
`;

const ProjectTitle = styled.h4`
    margin-bottom: 0.1rem;
`;

const ProjectLink = styled.a`
    color: black;
    text-decoration: underline;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Projects() {

    useEffect(() => {
    document.title = "Projects | MP-3";
    });
    return (
        <MainWrapper>
            <h3>Projects</h3>
            <ProjectSection>
                <ProjectTitle>Meowplay</ProjectTitle>
                <ProjectLink href="https://github.com/isaadev/cat-toys" target="_blank">GitHub</ProjectLink>
                <p>Implemented core e-commerce functionalities including product listings, shopping cart, and secure checkout processes.</p>
            </ProjectSection>

            <ProjectSection>
                <ProjectTitle>Nutrisistant</ProjectTitle>
                <ProjectLink href="https://github.com/zalu224/411-Proj" target="_blank">GitHub</ProjectLink>
                <p>Designed and implemented a RESTful API for a nutritional assistance application using Express and NodeJS.</p>

            </ProjectSection>
            
            <ProjectSection>
                <Calculator />
            </ProjectSection>
        </MainWrapper>
  );
};

