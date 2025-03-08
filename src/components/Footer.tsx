import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: white;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Footer () {
  return (
    <FooterWrapper>
      All Rights Reserved Isa <FooterLink href="/">Credits</FooterLink> &copy;
    </FooterWrapper>
  );
};

