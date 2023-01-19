import React from "react";
import ClickCounter2 from "./ClickCounter2";
import Counter from "./Counter";
import HoverCounter2 from "./HoverCounter2";

class RenderPropComp extends React.Component {
  render() {
    return (
      <>
        <Counter
          name="clickCounter using Render props"
          render={(count, incrementCounter) => (
            <ClickCounter2 count={count} incrementCounter={incrementCounter} />
          )}
        />
        <Counter
          name="HoverCounter using Render props"
          render={(count, incrementCounter) => (
            <HoverCounter2 count={count} incrementCounter={incrementCounter} />
          )}
        />
        <div>
          <Counter
            name="Testing Render Props"
            render={(count, incrementCounter) => (
              <button onClick={incrementCounter}>
                Increment Count {count}
              </button>
            )}
          />
        </div>
        <div>
          <Counter
            name="Testing Render Props: 2"
            render={(count, incrementCounter) => count + "Nisha"}
          />
        </div>
      </>
    );
  }
}

export default RenderPropComp;
