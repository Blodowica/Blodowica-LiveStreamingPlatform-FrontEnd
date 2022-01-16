import React, { useEffect } from 'react';
import ReactHls from 'react-hls'
import NavBar from '../common/NavBar';
import './VideoPlayerComponent.css'
import {Form, Button, Comment, Header} from 'semantic-ui-react'
import { useStore } from '../../Stores/store';
import LoadingComponent from '../common/LoadingComponent';
import ChatComponent from './ChatComponent';
import { observer } from 'mobx-react-lite';
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

export default observer(function VideoPLayerComponent()
{
const {userStore: {getUser, user}} = useStore()
const {streamStore:{getUserStream, stream, loadingInitial }} = useStore();
useEffect(() =>{

  async function getUserFunction()
  {
    await getUser();
  }

  async function getStreamFunction(userId)
  {
    await getUserStream(userId)
  }

  if(user == undefined)
  {
    getUserFunction();
  
  }
if(stream == undefined && user.id != undefined)
{
  getStreamFunction(user.id)
} 
  //  console.log(user.id );
  //  console.log(stream);
})

if (loadingInitial) return <LoadingComponent />
  return(

    <div className='videobackground '>
    <NavBar />
 
      {/* Use axio get check if the responds does not equal 0 or refused and then play video otherwise show image or something*/}
           <div className='leftMargin'>
          
            <ReactHls url='http://localhost:8080/hls/test.m3u8' 
            width='1120vh'
            height='650vh'
            hlsConfig={{
              liveDurationInfinity: true
              
            }}

             />
            <h4>
           Username: {user.userName}
           </h4>
           <h4>
           Title: { stream?  stream.title : null}
            </h4>
         </div>
         {/* {stream? <ChatComponent stream={stream}/> : alert("Stream is empty") } */}
        <ChatComponent/>
       { console.log('passed to component')}
      </div>
  );
})

