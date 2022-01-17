import { Formik, Form, Field, FieldProps } from 'formik'
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Card } from 'react-bootstrap';
import { Button, Comment, Header } from 'semantic-ui-react'
import { useStore } from "../../Stores/store";
import UserStore from '../../Stores/UserStore';
import LoginComponet from '../FormComponent/LoginComponent/LoginComponet';
import MyTeXtArea from '../Input/TextAreaInputComponent';
export default observer(function ChatComponent() {

    const { streamStore: { stream } } = useStore()
    const { commentStore } = useStore();
    const { userStore: { user } } = useStore();
    const userId = user.id

    useEffect(() => {
        if (stream) {
            commentStore.createHubConnection(26);
        }
        return () => {
            commentStore.clearComments();
        }
    }, [commentStore]);

    { console.log(userId); }


    // useEffect(() => {

    //     if (stream) {
    //         commentStore.createHubConnection(stream.streamId.toString());
    //     }
    //     return () => {
    //         commentStore.clearComments();
    //     }

    // })
    return (

        <div>

            <Card style={{ backgroundColor: '#EDEDED' }}>





                <Comment.Group>
                    {commentStore.comments.map(comment => (
                        <Comment key={comment.id}>
                            <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>{comment.displayName}</Comment.Author>
                                <Comment.Metadata>
                                    {/* <div>{formatDistanceToNow(comment.createdAt)} ago</div> */}
                                </Comment.Metadata>
                                <Comment.Text>{comment.body}</Comment.Text>

                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>

                <div className='chatForm'>


                    <Formik
                        onSubmit={(values, { resetForm }) => commentStore.addComments(values).then(() => resetForm())}
                        initialValues={{ body: '', userId: userId }}

                    >
                        {({ isSubmitting, isValid }) => (

                            <Form className='ui form'>
                                <MyTeXtArea placeholder='Add Comments' name='body' rows={2} />
                                <Button
                                    loading={isSubmitting}
                                    disabled={isSubmitting || !isValid}
                                    content='Send'
                                    labelPosition='left'
                                    icon='edit'
                                    primary
                                    type='submit'
                                    floated='right'
                                />
                            </Form>
                        )}
                    </Formik>

                </div>
            </Card>
        </div >
    )
})