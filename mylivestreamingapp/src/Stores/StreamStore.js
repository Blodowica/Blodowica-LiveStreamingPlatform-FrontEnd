import agent from "../API/ApiRequestAgent"
import { makeAutoObservable, runInAction } from "mobx";

export default class StreamStore {
    streamlist = {};
    loadingInitial = false;
    loading = false;
    selecetedStream = null;
    constructor() {
        makeAutoObservable(this)


    }


    getUserStream = async (userId) => {
        this.setLoadingInitial(true);
        var stream = await agent.Streams.GetUserStream(userId);
        runInAction(() => this.stream = stream);
        console.log(`made it to stream ${userId}`);
        this.setLoadingInitial(false);
    }

    UpdateUserStream = async (creds) => {
        this.setLoadingInitial(true);
        try {
            runInAction(() => this.loading = true);
            console.log(creds);
            const stream = await agent.Streams.updateUserStream(creds);

            runInAction(() => this.stream = stream);
            runInAction(() => this.loading = false)
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false)
            this.setLoadingInitial(false);
        }
    }
    getStreamList = async () => {
        try {
            this.setLoadingInitial(true);
            runInAction(() => this.loading = true);
            const streams = await agent.Streams.StreamList();
            runInAction(() => this.streamlist = streams);
            console.log(this.streamlist);
            runInAction(() => this.loading = false);
            this.setLoadingInitial(false);

        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
            this.setLoadingInitial(false);

        }
    }
    getstreamById = async (streamId) => {
        try {
            this.setLoadingInitial(true);
            runInAction(() => this.loading = true)
            const stream = await agent.Streams.GetStreamById(streamId)
            runInAction(() => this.selecetedStream = stream);
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
        }
        finally {
            runInAction(() => this.loading = false)
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state) => {
        this.loadingInitial = state;
    }

}