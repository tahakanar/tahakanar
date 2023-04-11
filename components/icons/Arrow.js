import React from "react";

const Arrow = ({ className }) => {
  return (
    <svg
      className={`${className} mr-2 w-4`}
      role='img'
      fill='currentColor'
      viewBox='0 0 12 12'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};

export default Arrow;
