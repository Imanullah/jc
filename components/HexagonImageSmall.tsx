import React from 'react';
import Image from 'next/image';

import Vector_small from '@/assets/images/Vector_small.svg';

export default function HexagonImageSmall() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image src={Vector_small} alt="" className="hexa" style={{ width: '30px', height: 'auto' }} priority />
    </div>
  );
}
