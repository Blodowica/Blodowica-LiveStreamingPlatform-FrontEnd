import React from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";


export default function LoadingComponent() {
    return (
        <Segment>

            <Dimmer active={true} inverted={true}>
                <Loader content="Loading..." />
            </Dimmer>
        </Segment>

    )
}