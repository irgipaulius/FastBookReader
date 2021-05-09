import React from "react";

export default function NumberInput(value, onChangeCallback) {
  return (
    <input
      type="number"
      value={value}
      onChange={(n) => onChangeCallback(n.target.value)}
      step="0.01"
      style={{ width: "55px" }}
    />
  );
}
