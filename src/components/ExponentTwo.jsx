import React from "react";

const ExponentTwo = ({ count }) => {
  const result = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>2</sup>
      </p>
      <p className="exponent-result">
        {`${count} * ${count} = `}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
