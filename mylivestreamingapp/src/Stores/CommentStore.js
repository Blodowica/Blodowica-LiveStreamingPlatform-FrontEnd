import * as SignalR from "@microsoft/signalr"
import { makeAutoObservable, runInAction } from "mobx";
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
                .withUrl('https://localhost:5000/chat?streamId=' + streamId, {
                    accessTokenFactory: () => store.userStore.user?.token

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

    // addComments = async (values: any) => {
    //     values.activityId = store.activityStore.selectedActivity?.id;

    //     try {
    //         await this.hubConnection?.invoke('SendComment', values);
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

}