import React from 'react';

const WebGLGame = () => {
  return (
    <div>
      <iframe 
        src={`${process.env.PUBLIC_URL}/webgl/index.html`} 
        width="100%" 
        height="600px" 
        title="WebGL Game" 
      />
    </div>
  );
};

export default WebGLGame;
