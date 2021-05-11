import React from 'react';
import PropTypes from 'prop-types';

function Grid(props) {
  return (
    <div
      className='
        media-grid
        row row-cols-1 
        row-cols-sm-2 
        row-cols-md-3 
        row-cols-lg-3 
        row-cols-xl-4 
        no-gutters 
        '
    >
      {props.children}
    </div>
  );
}

export default Grid;
