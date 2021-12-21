import React from 'react';
import ReactHls from 'react-hls'
import NavBar from '../common/NavBar';
import './VideoPlayerComponent.css'
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

export function VideoPLayerComponent()
{
  return(
      <div className=" fill-window videobackground">
        <NavBar />
      <h1>LiveStream Video PLayer </h1>

      <ReactHls url='http://localhost:8080/hls/test.m3u8' />
      </div>
  );
}

