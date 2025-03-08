import styled from "styled-components";

const HeaderWrapper = styled.header`
    background-color: black;
    padding: 0.5rem;
    color: white;
    text-align: left;
    width: auto;
`;

const Title = styled.h3`
    margin: 0;
`;

const Subtitle = styled.p`
    margin: 0;
`;

export default function Header() {
  return (
    <HeaderWrapper>
        <Title>Isa Alsafwah</Title>
        <Subtitle>Online Resume</Subtitle>
    </HeaderWrapper>
    );
};

