import React from "react";
import styled from "styled-components";
import JoinButton from "../components/JoinButton";
import MontageGif from "../assets/nft-montage-earn.gif";

const Montage = styled.img`
  height: 427.5689086914062px;
  width: 800px;
  left: 627px;
  top: 1083px;
  border-radius: 0px;
`;

const Title = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 110%;

  color: #232323;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Subtitle = styled.span`
  width: 75%;
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;

  color: #232323;
`;

const Caption = styled.span`
  width: 80%;

  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 160%;
  text-align: center;

  color: #232323;

  margin-bottom: 2rem;
`;

const LeadArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
`;

const LeadSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 4rem;
`;

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default function Lead() {
  return (
    <Frame>
      <LeadSection>
        <LeadArticle>
          <Title>Lead the change</Title>
          <Subtitle>
            In a decentralised world, you power <strong>the brand</strong>.
            Influence the way brands will look in the metaverse and{" "}
            <strong>build a community</strong> around those you love.
            <br />
            <br />
            <strong>
              Be a part of the change and join Embed’s decentralized protocol
              today
            </strong>
          </Subtitle>
          <JoinButton />
        </LeadArticle>
        <Montage src={MontageGif} alt="" />
      </LeadSection>
      <Caption>
        The trademarks, logos and brand names that appear on this website are
        used for informational or editorial purposes and are the property of
        their respective owners. Use of these trademarks, logos and brand names
        does not imply any affiliation with or endorsement by their owners.
      </Caption>
    </Frame>
  );
}
