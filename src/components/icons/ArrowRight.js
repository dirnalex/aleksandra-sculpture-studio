import React from 'react';

const ArrowRight = ({className, onClick}) => {
  return (
    <svg onClick={onClick} className={className} viewBox="0 0 52 13">
      <path
        d="M40.5312 1.00109L49.1562 5.84082H0V6.84082L49.1562 6.7002L40.5312 11.6805V12.6583L40.5625 12.7002L51.4101 6.34468L51.3998 6.34086L51.4102 6.33701L40.5312 0V1.00109Z"
        fill="#0B0909"/>
    </svg>
  );
};

export default ArrowRight;