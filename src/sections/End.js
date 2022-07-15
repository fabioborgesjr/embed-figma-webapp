import React from "react";
import styled from "styled-components";
import EmbedLogoSVG from "../assets/embed-logo.svg";
import LinkedInSVG from "../assets/social/linkedin.svg";
import TelegramSVG from "../assets/social/telegram.svg";
import TwitterSVG from "../assets/social/twitter.svg";
import Image from "../components/Image";

const Text = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  color: #ffffff;
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 1rem;
  width: 50%;
`;

const SocialMedia = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Frame = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3rem;
  background: #280a5f;
`;

const SVG = ({ src }) => <Image height="41" src={src} alt="" />;

export default function End() {
  return (
    <Frame>
      <Column>
        <SVG src={EmbedLogoSVG} />
        <br />
        <Text>© Embed 2022</Text>
      </Column>
      <Column>
        <Text>
          Embed protocol is a marketing community engine solution for brands and
          NFT holders that discovers, tokenizes, and activates communities in
          the metaverse and web3
        </Text>
        <br />
        <SocialMedia>
          <SVG src={LinkedInSVG} />
          <SVG src={TelegramSVG} />
          <SVG src={TwitterSVG} />
        </SocialMedia>
        <br />
        <Text>Legal | Privacy | Careers | Contact</Text>
      </Column>
    </Frame>
  );
}
