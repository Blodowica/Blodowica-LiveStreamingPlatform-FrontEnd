import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import TextInputComponent from "../../Input/TextInputComponent";
import { useStore } from "../../../Stores/store";
import { observer } from "mobx-react-lite";
import * as  Yup from 'yup';
import LoadingComponent from "../../common/LoadingComponent";

export default observer(function EditStreamComponent() {
    const { streamStore: { stream, getUserStream, loadingInitial } } = useStore();
    const { userStore: { user } } = useStore();


    useEffect(async () => {

        try {
            // console.log(stream.title);
            if (stream.title === undefined) {
                await getUserStream(user.id);

            }

        } catch (error) {
            console.log(error);
        }
    })


    if (loadingInitial) return <LoadingComponent />



    const ValidationSchema = Yup.object({
        title: Yup.string().required('Stream title is required '),
        description: Yup.string().required('Stream title is required ')
    })


    return (

        <Segment clearing>
            <Header className="mb-5 mt-2"> <h1 style={{ textAlign: 'center' }}>Edit User Information</h1></Header>
            <Formik
                validationSchema={ValidationSchema}
                enableReinitialize
                initialValues={{ title: stream.title, description: stream.description, userId: stream.userId, streamId: stream.streamId }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <TextInputComponent name='title' placeholder='Title' label='Title' />
                        {/* CHANGE INTO TEXTINPUTARE LATER*/}
                        <TextInputComponent name='description' placeholder='Description ' label='Description' />
                        <Button>Edit/Cancel</Button>
                        <Button disabled={!dirty || !isValid} floated='right' positive type='submit' content='Submit' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )

})