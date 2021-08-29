import React from "react";

export const MyContext = React.createContext();

export const Provider = (props) => {
  return (
    <MyContext.Provider value={props.store}>
      {props.children}
    </MyContext.Provider>
  );
};

export const Consumer = (props) => {
  return <MyContext.Consumer>{props.children}</MyContext.Consumer>;
};
