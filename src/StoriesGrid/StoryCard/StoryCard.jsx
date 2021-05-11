import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import StoryHeader from './_StoryHeader';
import StoryFooter from './_StoryFooter';

function StoryCard(props) {
  console.log(props);
  return (
    <div className='col px-2 px-sm-1 pb-2'>
      <div className='story-card'>
        <StoryHeader title={props.data.title} rating={props.data.rating} />
        <div className='story-content'>
          <p>{props.data.previewContent}</p>
        </div>
        <StoryFooter
          user={props.data.user}
          commentsCount={props.data.commentsCount}
        />
      </div>
    </div>
  );
}

StoryCard.propTypes = {};

export default StoryCard;
