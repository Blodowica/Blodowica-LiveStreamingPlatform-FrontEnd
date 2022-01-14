import React, { useEffect } from 'react';
import ReactHls from 'react-hls'
import NavBar from '../common/NavBar';
import './VideoPlayerComponent.css'
import {Form, Button, Comment, Header} from 'semantic-ui-react'
import { useStore } from '../../Stores/store';
import LoadingComponent from '../common/LoadingComponent';
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

export function VideoPLayerComponent()
{




  return(
    <div className='videobackground '>
    <NavBar />
      <h1>LiveStream Video PLayer </h1>
      {/* Use axio get check if the responds does not equal 0 or refused and then play video otherwise show image or something*/}
           <div   className='leftMargin'>
          
            <ReactHls url='http://localhost:8080/hls/test.m3u8' 
            width='1120vh'
            height='650vh'
            hlsConfig={{
              liveDurationInfinity: true
              
            }}

             />
            <h4>
           Username: Streamer Username placeholder 
           </h4>
           <h4>
           Title: User Title PlaceHolder
            </h4>
         </div>

         <div className='chatBox'>
  <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
    <Comment>
      <Comment.Avatar src='/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment.Content>
      </Comment>
      <Comment>
      <Comment.Avatar src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
         <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
      </Comment.Group>
         </div>
      </div>
  );
}

