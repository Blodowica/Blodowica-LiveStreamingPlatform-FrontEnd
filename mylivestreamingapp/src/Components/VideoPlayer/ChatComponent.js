import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Form, Button, Comment, Header } from 'semantic-ui-react'
import { useStore } from "../../Stores/store";
export default observer(function ChatComponent() {

    const { streamStore: { stream } } = useStore()
    const { commentStore } = useStore();

    useEffect(() => {
        if (stream) {
            commentStore.createHubConnection(stream.streamId);
        }
        return () => {
            commentStore.clearComments();
        }

    })
    return (

        <div className='chatBox'>
            <Comment.Group>
                {commentStore.comments.map(comment => (
                    <Comment key={comment.id}>
                        <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>{comment.userName}</Comment.Author>
                            <Comment.Metadata>
                                <div>{comment.createdAt}</div>
                            </Comment.Metadata>
                            <Comment.Text>{comment.body}</Comment.Text>

                        </Comment.Content>
                    </Comment>
                ))}
            </Comment.Group>



            <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={() => console.log(`chatbox ${stream.streamId}`)} />
            </Form>

        </div >
    )
})