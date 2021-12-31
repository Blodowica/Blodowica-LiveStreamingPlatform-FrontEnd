import agent from "../API/ApiRequestAgent"
import { makeAutoObservable, runInAction } from "mobx";

export default class StreamStore {
    stream = {};
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)


    }


    getUserStream = async (userId) => {
        this.setLoadingInitial(true);
        var stream = await agent.Streams.GetUserStream(userId);
        runInAction(() => this.stream = stream);
        this.setLoadingInitial(false);
    }

    setLoadingInitial = (state) => {
        this.loadingInitial = state;
    }

}