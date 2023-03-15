import React from 'react';

function RenderRockets({ rocket }) {
  //console.log(rocket);
  const { name, type, flickr_images } = rocket
  return (
    <div>
      id:{rocket.id} |
      name:{name} |
      type:{type} |
    </div>
  )
}

export default RenderRockets