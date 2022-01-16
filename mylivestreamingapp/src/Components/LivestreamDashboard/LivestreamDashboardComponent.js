import React, { useEffect } from "react";
import agent from "../../API/ApiRequestAgent";
import { useStore } from "../../Stores/store";
import { Button, Item } from 'semantic-ui-react'
import NavBar from "../common/NavBar";

export default function LivestreamDashboardComponent() {
    var streamz = [];
    const { streamStore: { streamlist, getStreamList } } = useStore();

    useEffect(() => {

        async function loadStream() {

            streamz = await getStreamList();
            console.log(streamlist);
        }
        loadStream();
    })

    return (
        <>

            <NavBar />


            <Button>
                click to load array
            </Button>
            {/* {streamlist.map(stream => (
                <Item.Group divided>
                    <Item>
                        <Item.Image size='tiny' src='/images/wireframe/image.png' />
                        <Item.Content verticalAlign='middle'>{stream}</Item.Content>
                    </Item>
                </Item.Group>
            ))} */}
        </>



    )

}