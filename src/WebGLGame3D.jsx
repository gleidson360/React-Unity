import React from 'react';

const WebGLGame3D = () => {
  return (
    <div>
      <iframe 
        src={`${process.env.PUBLIC_URL}/webgl3d/index.html`} 
        width="100%" 
        height="600px" 
        title="WebGL Game 3D" 
      />
    </div>
  );
};

export default WebGLGame3D;
