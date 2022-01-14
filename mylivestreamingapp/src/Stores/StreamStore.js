import agent from "../API/ApiRequestAgent"
import { makeAutoObservable, runInAction } from "mobx";

export default class StreamStore {
    stream = {};
    loadingInitial = false;
    loading = false;

    constructor() {
        makeAutoObservable(this)


    }


    getUserStream = async (userId) => {
        this.setLoadingInitial(true);
        var stream = await agent.Streams.GetUserStream(userId);
        runInAction(() => this.stream = stream);
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


    setLoadingInitial = (state) => {
        this.loadingInitial = state;
    }

}