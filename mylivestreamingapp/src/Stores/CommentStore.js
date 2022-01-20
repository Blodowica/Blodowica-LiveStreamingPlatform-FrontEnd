import * as SignalR from "@microsoft/signalr"
import { makeAutoObservable, runInAction } from "mobx";
import { string } from "yup";
import { store } from "./store";


export default class CommentStore {
    comments = [];
    hubConnection = null;

    constructor() {
        makeAutoObservable(this)
    }

    createHubConnection = (streamId) => {
        if (store.streamStore.stream) {
            this.hubConnection = new SignalR.HubConnectionBuilder()
                .withUrl(`${process.env.REACT_APP_BACKEND_API_URL}/chat?streamId=` + streamId, {

                    accessTokenFactory: () => {
                        return store.userStore.user.token

                    },

                })
                .withAutomaticReconnect()
                .configureLogging(SignalR.LogLevel.Debug)
                .build();

            this.hubConnection.start().catch(error => console.log('Error establishing the connection', error))

            this.hubConnection.on('LoadingComments', (comments) => {
                runInAction(() => {
                    comments.forEach(comment => {
                        comment.createdAt = new Date(comment.createdAt + 'Z');
                    })
                    this.comments = comments
                });
            });

            this.hubConnection.on('ReceiveComment', (comment) => {
                runInAction(() => {
                    comment.createdAt = new Date(comment.createdAt);
                    this.comments.unshift(comment) //unshift unlike push puts comments at the start of the array 
                })
            })
        }

    }
    stopHubConnection = () => {
        this.hubConnection?.stop().catch(error => console.log('Error stopping the connection', error));
    }

    clearComments = () => {
        this.comments = [];
        this.stopHubConnection();
    }

    addComments = async (values) => {

        values.streamId = 6;


        try {
            await this.hubConnection.invoke('SendComment', values);
        } catch (error) {
            console.log(error);

        }
    }

}