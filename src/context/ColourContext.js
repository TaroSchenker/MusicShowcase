import React, { createContext, useState } from "react";

export const ColourContext = createContext();

//Hold information and pass it down to where we want it
const ColourProvider = (props) => {
  const [colour, setColour] = useState("");

  return (
    <ColourContext.Provider value={[colour, setColour]}>
      {props.children}
    </ColourContext.Provider>
  );
};

export default ColourProvider;
