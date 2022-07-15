import React from "react";
import styled from "styled-components";
import MatchSVG from "../assets/match-vector.svg";
import TokenizeSVG from "../assets/tokenize-vector.svg";
import EarnSVG from "../assets/earn-vector.svg";
import JoinButton from "../components/JoinButton";
import Image from "../components/Image";

const Title = styled.span`
  height: 53px;

  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 110%;

  text-align: center;

  color: #232323;
`;

const Subtitle = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;

  text-align: center;
  margin: 2rem 0 1rem;

  color: #232323;
`;

const BePart = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 114.5%;

  text-align: center;

  color: #232323;

  margin: 6rem 0 2rem;
`;

const HowToColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 25px;

  width: 306px;
  height: 303px;
`;

const HowToColumnHeaderTitle = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 85.5%;

  color: #232323;
`;

const HowToColumnHeader = ({ icon, title }) => (
  <>
    {icon}
    <HowToColumnHeaderTitle>{title}</HowToColumnHeaderTitle>
  </>
);

const HowToColumnContentItem = styled.li`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;

  color: #232323;
`;

const HowToColumnContent = ({ contents }) => (
  <ol>
    {contents.map((content, index) => (
      <HowToColumnContentItem key={index}>{content}</HowToColumnContentItem>
    ))}
  </ol>
);

const HowToColumns = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 4rem;
`;

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 852px;
  margin: 3rem;
`;

const matchContents = [
  "Join Embed",
  "Pick and get matched with brands that resonate with the things you're passionate about",
];

const tokenizeContents = [
  "Get branded NFTs that unlock rewards based on your engagement in the metaverse",
  "Collaborate with brands on long-lasting campaigns in the Embed network",
  "Connect with exclusive communities, build connections, increase your impact",
];

const earnContents = [
  "Collect rewards in tokens and NFT",
  "Get extra value from exclusive communities, meta-physical events, and our special offers on products/services",
];

const SVG = ({ src }) => <Image height="50px" src={src} alt="" />;

export default function HowTo() {
  return (
    <Frame>
      <Title>How to earn with Embed</Title>
      <Subtitle>Three simple steps to get your started. </Subtitle>
      <HowToColumns>
        <HowToColumn>
          <HowToColumnHeader title={"Match"} icon={<SVG src={MatchSVG} />} />
          <HowToColumnContent contents={matchContents} />
        </HowToColumn>
        <HowToColumn>
          <HowToColumnHeader
            title={"Tokenize"}
            icon={<SVG src={TokenizeSVG} />}
          />
          <HowToColumnContent contents={tokenizeContents}>
            Impact your favorite brand and build a community around it
          </HowToColumnContent>
        </HowToColumn>
        <HowToColumn>
          <HowToColumnHeader title={"Earn"} icon={<SVG src={EarnSVG} />} />
          <HowToColumnContent contents={earnContents}>
            Grow your audience and earn rewards
          </HowToColumnContent>
        </HowToColumn>
      </HowToColumns>
      <BePart>Be part of the alpha launch</BePart>
      <JoinButton />
    </Frame>
  );
}
