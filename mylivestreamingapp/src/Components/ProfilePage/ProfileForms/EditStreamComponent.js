import { Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import TextInputComponent from "../../Input/TextInputComponent";
import { useStore } from "../../../Stores/store";
import { observer } from "mobx-react-lite";

export default observer(function EditStreamComponent() {
    const { userStore: { stream } } = useStore();
    const [currentStream] = useState({
        title: stream.title,
        description: stream.description



    })

    return (
        <Segment clearing>
            <Header className="mb-5 mt-2"> <h1 style={{ textAlign: 'center' }}>Edit User Information</h1></Header>
            <Formik
                //validationSchema={ValidationSchema}
                enableReinitialize
                initialValues={currentStream}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <TextInputComponent name='Title' placeholder='Title' label='Title' />
                        <TextInputComponent name='Description' placeholder='Description ' label='Description' />
                        <Button>Edit/Cancel</Button>
                        <Button loading='loading' disabled={!dirty || !isValid} floated='right' positive type='submit' content='Submit' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )

})