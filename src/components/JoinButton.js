import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

const DarkContainer = styled.button`
  background: transparent;
  height: 50px;
  width: 200px;
  border-radius: 12px;
  border: 4px solid #16bbfd;
  margin: ${(props) => props.margin};
`;

const LightContainer = styled.button`
  background: #ffffff;
  height: 50px;
  width: 200px;
  border-radius: 12px;
  border: 4px solid #16bbfd;
  margin: ${(props) => props.margin};
`;

const DarkContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));

  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 85.5%;

  color: #ffffff;
`;

const LightContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;

  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 85.5%;

  color: #16bbfd;
`;

export default function JoinButton({ dark, margin }) {
  const ButtonCmp = dark ? DarkContent : LightContent;
  const ContainerCmp = dark ? DarkContainer : LightContainer;

  return (
    <ContainerCmp margin={margin}>
      <ButtonCmp>
        Join Wishlist
        <FontAwesomeIcon icon={faArrowRight} />
      </ButtonCmp>
    </ContainerCmp>
  );
}
