import React from 'react';
import ReactHls from '../../node_modules/react-hls'
import NavBar from './common/NavBar';
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

export function VideoPLayerComponent()
{
  return(
      <div className="Full">
        <NavBar />
      <h1>LiveStream Video PLayer </h1>

      <ReactHls url='http://localhost:8080/hls/test2.m3u8' />
      </div>
  );
}

