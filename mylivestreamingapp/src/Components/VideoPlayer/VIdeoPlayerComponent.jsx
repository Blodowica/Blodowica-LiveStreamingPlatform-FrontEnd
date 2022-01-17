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

    <div className='videobackground fill-window'>
    <NavBar />
   <div className='row' >
    

      {/* Use axio get check if the responds does not equal 0 or refused and then play video otherwise show image or something*/}
           <div className='col-12 col-sm-12 col-md-10 col-xl-9 ml-5 col-lg-6'>
          
            <ReactHls url='http://localhost:8080/hls/test.m3u8' 
               autoPlay={false}
               controls={true}
               width="85%"
               height="auto"
               
            hlsConfig={{
              liveDurationInfinity: true
              
            }}

             />
            <h4 style={{color: 'white'}}>
           Username: {user.userName}
           </h4>
           <h4 style={{color: 'white', marginBottom: '10%'}}>
           Title: { stream?  stream.title : null}
            </h4>
         </div>
         {/* {stream? <ChatComponent stream={stream}/> : alert("Stream is empty") } */}
         <div className='chatBox col-12 col-md-8 ml-5'>
        <ChatComponent/>
         </div>
         </div>
      
      </div>
  );
})

