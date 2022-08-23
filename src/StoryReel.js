import React from 'react';
import './StoryReel.css';
import partha from './images/partha.jpeg';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyreel'>
     {/* Story */}
     <Story className='storyreel_story' image={partha}
     profileSrc={partha}
     title="Partha"/>
     {/* Story */}
     <Story className='storyreel_story' image={partha}
     profileSrc={partha}
     title="Partha"/>
     {/* Story */}
     <Story className='storyreel_story' image={partha}
     profileSrc={partha}
     title="Partha"/>
     {/* Story */}
     <Story className='storyreel_story' image={partha}
     profileSrc={partha}
     title="Partha"/>
     {/* Story */}
     <Story className='storyreel_story' image={partha}
     profileSrc={partha}
     title="Partha"/>
    </div>
  )
}

export default StoryReel