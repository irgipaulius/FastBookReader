import React from "react";

import { round } from "../../utils";
import NumberInput from "./numberInput";

export default function SpeedTable(speed, numPages, setSpeedCallback) {
  const setTotal = (totalSeconds) => {
    setSpeedCallback(totalSeconds / numPages);
  };

  return (
    <div className="Example__container__speed">
      <table>
        <tr>
          <th>Speed:</th>
          <th>{NumberInput(speed, setSpeedCallback)} seconds per page</th>
        </tr>
        <tr>
          <th>Or:</th>
          <th>
            {NumberInput(speed * numPages, setTotal)} seconds for {numPages}{" "}
            pages
          </th>
        </tr>
        <tr>
          <th>Total:</th>
          <th>
            {Math.floor((numPages * speed) / 60)} minutes and{" "}
            {round((numPages * speed) % 60, 2)} seconds.
          </th>
        </tr>
      </table>

      <div>
        <input
          id="typeinp"
          type="range"
          min={0}
          max={60}
          value={speed}
          onChange={(n) => setSpeedCallback(n.target.value)}
          step="0.05"
          style={{ width: "500px" }}
        />
      </div>
    </div>
  );
}
