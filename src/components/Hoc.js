import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default function Hoc() {
  return (
    <div>
      <div>HOC PAGE</div>
      <ClickCounter></ClickCounter>
      <ClickCounter theme="dark"> </ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}
