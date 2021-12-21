import { Form, Formik } from "formik";
import React from "react";
import { Card } from "react-bootstrap";

export default function EditUserProfileComponent() {

    return (
        <Card>

            <Formik>
                <Form>
                    <input
                        type="email"
                        name="email"


                    />
                </Form>

            </Formik>
        </Card>

    )

}