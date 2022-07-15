import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import NeonImage from "../assets/neon-nightclub.jpg";
import { join } from "../features/join/joinSlice";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const JoinInput = styled.input`
  background: transparent;
  height: 50px;
  width: 200px;
  border-radius: 12px;
  border: 4px solid #16bbfd;
  margin: 3rem;
  padding: 0px 2.5rem 0 1rem;

  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));

  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 85.5%;

  color: #ffffff;
`;

const Title = styled.span`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 83.478px;
  line-height: 71px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 3.18587px 3.18587px rgba(0, 0, 0, 0.25);
`;

const Frame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  height: 868px;

  background: url(${NeonImage});
  background-repeat: no-repeat;
  background-size: 100% 868px;
`;

export default function Join() {
  const reduxUser = useSelector((state) => state.join.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState(reduxUser);

  const submit = useCallback(() => {
    dispatch(join({ user }));

    setUser("");

    alert("Join request sent successfully!");
  }, [dispatch, user]);

  return (
    <Frame>
      <Title>Join the waitlist</Title>
      <InputContainer>
        <JoinInput
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Join Wishlist"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          color="#fff"
          style={{
            position: "relative",
            zIndex: 1,
            left: "-5rem",
            top: 1,
            cursor: "pointer",
          }}
          onClick={submit}
        />
      </InputContainer>
    </Frame>
  );
}
