import React from 'react';
import PropTypes from 'prop-types';

function StoryFooter(props) {
  return (
    <div className='story-footer d-flex justify-content-between'>
      <div>
        <img src={props.user.avatar} alt={props.user.name} />
        <span>{props.user.name}</span>
      </div>
      <div>{props.commentsCount} comments</div>
    </div>
  );
}

StoryFooter.propTypes = {};

export default StoryFooter;
