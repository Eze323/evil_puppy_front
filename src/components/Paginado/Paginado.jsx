import React from 'react';
import './Paginado.css';
export const Paginado = ({ paginado, indexPage, totalResults }) => {
  const disableLeftButton = indexPage === 1;
  const disableRightButton = indexPage * 10 >= totalResults;

  return (
    <div className='contentArrow'>
      <button className='btnLeft' onClick={() => paginado(indexPage - 1)} disabled={disableLeftButton}>Left</button>
      <span>{indexPage}</span>
      <button className='btnRight' onClick={() => paginado(indexPage + 1)} disabled={disableRightButton}>Right</button>
    </div>
  );
};
