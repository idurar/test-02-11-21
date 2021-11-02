import React, { useState}from "react";
import {
  Checkbox,
  
} from "@chakra-ui/react";

const Tree = ({ indexVal, states, state, keyName, onChange }) => {
  let val = keyName;
  const subVal = state.children || {};
  const enabled = state.enabled || false;

  return (
    <div
      className="Tree"
      style={{
        display: "inline-block",
        width: "100%",
        marginLeft: "20px",
        marginTop: "5px",
      }}
    >
      <Checkbox style={{ marginRight: "10px" }} defaultChecked={enabled} />
      <span>{val}</span>
      {Object.keys(subVal).map((keyName, index) => (
        <Tree
          indexVal={[...indexVal, keyName]}
          key={indexVal.join("") + index}
          states={subVal}
          state={subVal[keyName]}
          keyName={keyName}
          onChange={onChange}
        ></Tree>
      ))}
    </div>
  );
};

export default function FilterBox() {
  let initialSate = {
    enabled: true,
    children: {
      thisKey: {
        enabled: true,
      },
      anotherKey: {
        enabled: false,
        children: {
          newKey: {
            enabled: true,
          },
          lastKey: {
            enabled: false,
          },
        },
      },
    },
  };

  const [states, setSates] = useState(initialSate);
  const onChange = (state) => {
    setSates(state);
  };
  const { children: subVal } = states;

  return (
    <div style={{ width: "400px" }}>
      {Object.keys(subVal).map((keyName, index) => (
        <Tree
          key={index}
          indexVal={[keyName]}
          states={subVal}
          state={subVal[keyName]}
          keyName={keyName}
          onChange={onChange}
        ></Tree>
      ))}
    </div>
  );
}
