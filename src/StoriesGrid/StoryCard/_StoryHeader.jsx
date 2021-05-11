import React from 'react';
import PropTypes from 'prop-types';

function StoryHeader(props) {
  return (
    <div className='story-header d-flex justify-content-between align-items-center'>
      <h2>{props.title}</h2>
      <span>{props.rating}%</span>
    </div>
  );
}

StoryHeader.propTypes = {};

export default StoryHeader;
