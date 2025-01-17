import React from "react";

const ExponentThree = ({ count }) => {
  const result = Math.pow(count, 3);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>3</sup>
      </p>
      <p className="exponent-result">
        {`${count} * ${count} * ${count} = `}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
