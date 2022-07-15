import React from "react";
import EmbedToEarn from "../sections/EmbedToEarn";
import End from "../sections/End";
import HowTo from "../sections/HowTo";
import Join from "../sections/Join";
import Lead from "../sections/Lead";
import Monetize from "../sections/Monetize";

export default function Earn() {
  return (
    <>
      <Monetize />
      <Lead />
      <EmbedToEarn />
      <HowTo />
      <Join />
      <End />
    </>
  );
}
