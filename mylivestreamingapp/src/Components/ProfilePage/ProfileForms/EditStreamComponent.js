import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import TextInputComponent from "../../Input/TextInputComponent";
import { useStore } from "../../../Stores/store";
import { observer } from "mobx-react-lite";
import * as  Yup from 'yup';
import LoadingComponent from "../../common/LoadingComponent";
import MyTeXtArea from "../../Input/TextAreaInputComponent";

export default observer(function EditStreamComponent() {
    const { streamStore: { stream, getUserStream, loadingInitial, UpdateUserStream, loading } } = useStore();
    const { userStore: { user } } = useStore();


    useEffect(() => {

        try {

            if (stream === undefined) {
                GetUserStreamFunction()
            }
            async function GetUserStreamFunction() {
                await getUserStream(user.id);
                console.log(stream);


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
    function handleStreamSubmit(stream) {
        UpdateUserStream(stream);
    }

    return (

        <Segment clearing>
            <Header className="mb-5 mt-2"> <h1 style={{ textAlign: 'center' }}>Edit Stream Information</h1></Header>
            <Formik
                validationSchema={ValidationSchema}
                enableReinitialize
                initialValues={stream}
                onSubmit={values => handleStreamSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <TextInputComponent name='title' placeholder='Title' label='Title' />
                        {/* CHANGE INTO TEXTINPUTARE LATER*/}
                        <MyTeXtArea rows={3} placeholder="Description" name='description' label='Description' />

                        <Button loading={loading} disabled={!dirty || !isValid} floated='right' positive type='submit' content='Submit' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )

})