import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export const PlusButton = () => {
  const plusButton = useContext(CountContext);
  if (!plusButton) {
    throw new Error("up button no worky");
  }
  const { handleIncrement } = plusButton;

  // const user = useContext(CreateUser);
  // if (!user) {
  //   throw new Error("Dashboard must be used with AuthProvider");
  // }

  // const context = useContext(CountContext);
  // if (!context) {
  //   throw new Error("Count not available");
  // }
  // const { count } = context;

  return (
    <button
      onClick={handleIncrement}
      style={{ fontSize: "40px" }}
    >
      +
    </button>
  );
};

export const MinusButton = () => {
  const minusButton = useContext(CountContext);
  if (!minusButton) {
    throw new Error("down button no worky");
  }
  const { handleDecrement } = minusButton;

  return (
    <button
      onClick={handleDecrement}
      style={{ fontSize: "40px" }}
    >
      -
    </button>
  );
};

export const ResetButton = () => {
  const resetButton = useContext(CountContext);
  if (!resetButton) {
    throw new Error("reset button brokie");
  }
  const { handleReset } = resetButton;

  return (
    <button
      onClick={handleReset}
      style={{ fontSize: "40px" }}
    >
      🤪
    </button>
  );
};
