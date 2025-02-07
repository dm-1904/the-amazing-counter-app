import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export const PlusButton = () => {
  const plusButton = useContext(CountContext);
  if (!plusButton) {
    throw new Error("up button no worky");
  }
  const { handleIncrement } = plusButton;

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
