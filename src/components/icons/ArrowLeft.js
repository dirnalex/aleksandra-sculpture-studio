import React from 'react';

const ArrowLeft = ({className, onClick}) => {
  return (
    <svg onClick={onClick} className={className} viewBox="0 0 52 13">
      <path
        d="M10.8789 1.00109L2.25391 5.84082H51.4102V6.84082L2.25391 6.7002L10.8789 11.6805V12.6583L10.8477 12.7002L4.57764e-05 6.34468L0.0103264 6.34086L-4.57764e-05 6.33701L10.8789 0V1.00109Z"
        fill="#0B0909"/>
    </svg>
  );
};

export default ArrowLeft;