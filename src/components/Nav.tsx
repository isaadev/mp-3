import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  width: 30%;
  border-right: 1px solid black;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #777a8a;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 750px) {
    width: auto;
    height: auto;
    margin: 0;
    padding: .3rem;
    padding-bottom: 1rem;
    justify-content: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
  }
`;

const NavItem = styled.li`
  text-align: center;
  border: 2px solid rgb(49, 34, 34);
  border-radius: 5px;
  padding: 0.6rem;
  margin-top: 50px;

  @media screen and (max-width: 750px) {
    margin-top: .5rem;
    margin-right: .5rem;
    padding: 0.1rem 0.2rem;
    margin-top: 25px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: calc(0.4rem + 0.5vw);

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export default function Nav() {
    return (
      <NavWrapper>
        <NavList>
            <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
            <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
            <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
            <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
            <NavItem><StyledLink to="/skills">Skills</StyledLink></NavItem>
            <NavItem><StyledLink to="/contact">Contact</StyledLink></NavItem>
        </NavList>
    </NavWrapper>  
    )
}