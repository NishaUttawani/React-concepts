import React from "react";

function MemoComp(props) {
  console.log("Memo Comp Render");
  return <div>MemoComp {props.name}</div>;
}

export default React.memo(MemoComp);
