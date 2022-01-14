import React, { useEffect } from "react";
import agent from "../../API/ApiRequestAgent";
import { useStore } from "../../Stores/store";

export default function LivestreamDashboardComponent() {
    var streams = [];
    const { streamStore: { stream, } } = useStore();

    useEffect(async () => {
        streams = await agent.Streams.StreamList();
    })
    return (
        <>
            <h1>
                Livestream Dashboard!!
            </h1>

        </>
    )

}