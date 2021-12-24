import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../../Stores/store";
import * as  Yup from 'yup';
import TextInputComponent from "../../Input/TextInputComponent";


export default observer(function EditProfileComponent() {
    const { userStore: { user, updateUser } } = useStore();
    const [currentUser] = useState({
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,


    })

    const ValidationSchema = Yup.object({
        userName: Yup.string().required(' Username is required!'),
        firstName: Yup.string().required(' First Name is required!'),
        lastName: Yup.string().required(' Last Name is required!'),
        email: Yup.string().email().required(" Email is required!"),
    })


    function handleFormSubmit(user) {
        updateUser(user);

    }
    return (
        <Segment clearing>
            <Header className="mb-5 mt-2"> <h1 style={{ textAlign: 'center' }}>Edit User Information</h1></Header>
            <Formik
                validationSchema={ValidationSchema}
                enableReinitialize
                initialValues={currentUser}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <TextInputComponent name='userName' placeholder='Username' label='Username' />
                        <TextInputComponent name='firstName' placeholder='First Name' label='First name' />
                        <TextInputComponent name='lastName' placeholder='Last Name' label='Last name' />
                        <TextInputComponent name='email' placeholder='Email' label='Email' />
                        <Button>Edit/Cancel</Button>
                        <Button loading='loading' disabled={!dirty || !isValid} floated='right' positive type='submit' content='Submit' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
})