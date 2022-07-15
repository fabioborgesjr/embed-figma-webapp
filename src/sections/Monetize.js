import React from "react";
import styled from "styled-components";
import earnVideo from "../assets/nft-collectors.mp4";
import JoinButton from "../components/JoinButton";
import EmbedLogo from "../assets/embed.svg";

const Video = styled.video`
  margin-top: 111px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(ezgif.png);
`;

const Logo = styled.img`
  margin-bottom: 1rem;
`;

const Title = styled.span`
  width: 60%;
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 110%;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 852px;
  position: absolute;
  top: 324px;
`;

const Subtitle = styled.span`
  width: 50%;
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 24px 0 40px;
`;

const Underline = styled.span`
  content: "";
  display: inline-block;
  width: 50%;
  background: #00b6ff;
  height: 11px;
  margin-bottom: 24;
`;

export default function Monetize() {
  return (
    <>
      <Video width="100%" autoPlay muted>
        <source src={earnVideo} type="video/mp4"></source>
      </Video>
      <Frame>
        <Logo height="74px" src={EmbedLogo} alt="" />
        <Title>Embed empowers you to monetize your portfolio</Title>
        <Underline />
        <Subtitle>
          We enable NFT holders to become influencers, build their audience
          through a turn-key solution developed to monetize and transform their
          portfolio into a yielding asset. We create passion-based communities.
        </Subtitle>
        <JoinButton />
      </Frame>
    </>
  );
}
