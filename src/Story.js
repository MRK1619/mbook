import { Avatar } from '@mui/material';
import React from 'react';
import './Story.css';

function Story({image, profileSrc, title}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='story'>
        <Avatar className='story_ava'  src={profileSrc} />
        <h4>{title}</h4>

    </div>
  )
}

export default Story