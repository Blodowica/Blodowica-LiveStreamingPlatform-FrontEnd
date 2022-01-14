import React from "react";
import { useStore } from "../../../Stores/store";

export default function StreamDetailComponent() {
    const { userStore: { stream } } = useStore();
    const { userStore: { user } } = useStore();
    return (
        <>
            <h1>Stream Details</h1>

            <h4 style={{ textAlign: 'center' }}>Stream key : {user.streamKey}</h4>
        </>



    )

}