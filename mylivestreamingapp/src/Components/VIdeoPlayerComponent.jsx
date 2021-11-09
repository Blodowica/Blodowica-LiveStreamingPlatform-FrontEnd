import React from 'react';
import ReactHls from '../../node_modules/react-hls'
import NavBar from './common/NavBar';
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

export function VideoPLayerComponent()
{
  return(
      <div>
        <NavBar />
      <h1>LiveStream Video PLayer </h1>

      <ReactHls url='http://192.168.2.134:8080/hls/test.m3u8' />
      </div>
  );
}

