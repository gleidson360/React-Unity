import React from 'react';
import ReactDOM from 'react-dom';
import WebGLGame from './WebGLGame';
import WebGLGame3D from './WebGLGame3D';

ReactDOM.render(
  <React.StrictMode>
    <WebGLGame/>
    <WebGLGame3D/>
  </React.StrictMode>,
  document.getElementById('root')
);
