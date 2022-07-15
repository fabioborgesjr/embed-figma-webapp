import React from "react";
import styled from "styled-components";
import EmbedLogoSVG from "../assets/blue-embed-logo.svg";
import Image from "./Image";

const Container = styled.header`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  background: #ffffff;
  height: 110px;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 60%;
  padding-left: 2rem;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-evenly;
  align-items: center;
`;

const Link = styled.a`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${(props) => (props.active ? "#747FFE" : "#280a5f")};
  text-decoration: none;
`;

export default function Header() {
  return (
    <Container>
      <Logo>
        <Image height="26" src={EmbedLogoSVG} alt="" />
      </Logo>
      <Links>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Home
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer" active>
          Earn
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Promote
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Join Waitlist
        </Link>
      </Links>
    </Container>
  );
}
