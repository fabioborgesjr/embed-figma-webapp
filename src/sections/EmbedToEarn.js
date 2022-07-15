import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Title = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 85.5%;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const Card = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  width: 283px;
  height: 249px;
  border: 2px solid #ffffff;
  border-radius: 11px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: ${(props) =>
    props.match ? "#D665FC" : props.influence ? "#5D5CCE" : "#1B86CE"};
  mix-blend-mode: normal;
`;

const CardTitle = styled.article`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 85.5%;
  color: #ffffff;
`;

const CardContent = styled.article`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 126%;
  text-align: center;
  color: #ffffff;
`;

const CardsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin: 4rem;
`;

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 852px;
  background: linear-gradient(90deg, #f059fc -0.05%, #16bbfd 94.34%);
`;

const ArrowIcon = () => <FontAwesomeIcon icon={faArrowRight} color="#fff" />;

export default function EmbedToEarn() {
  return (
    <Frame>
      <Title>The Embed-to-Earn Model</Title>
      <CardsSection>
        <Card match>
          <CardTitle>#1 Match</CardTitle>
          <br />
          <CardContent>
            Join Embed and match with your favourite brands
          </CardContent>
        </Card>
        <ArrowIcon />
        <Card influence>
          <CardTitle>#2 Influence</CardTitle>
          <br />
          <CardContent>
            Impact your favorite brand and build a community around it
          </CardContent>
        </Card>
        <ArrowIcon />
        <Card>
          <CardTitle>#3 Earn</CardTitle>
          <br />
          <CardContent>Grow your audience and earn rewards</CardContent>
        </Card>
      </CardsSection>
    </Frame>
  );
}
