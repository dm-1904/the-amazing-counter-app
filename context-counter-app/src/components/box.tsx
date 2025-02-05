import { ReactNode, useContext } from "react";
import { CountContext } from "../context/CountContext";

export const Box = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="outer-box"
      style={{ border: "1px solid green", margin: "40px" }}
    >
      {children}
    </div>
  );
};

export const NestedBox = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("Count not available");
  }

  const { count } = context;

  return (
    <div
      className="inner-box"
      style={{ backgroundColor: "white", margin: "20px" }}
    >
      <h3
        className="number"
        style={{ color: "black", margin: "0px" }}
      >
        {count}
      </h3>
    </div>
  );
};
