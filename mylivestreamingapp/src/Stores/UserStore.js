import { makeAutoObservable, runInAction } from "mobx";
import { history } from "..";

import agent from "../API/ApiRequestAgent";
import { store } from "./store";



export default class UserStore {
    user = {};
    stream = {};

    constructor() {
        makeAutoObservable(this)


    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (email, password) => {


        try {
            var creds = { email, password }
            const user = await agent.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user)
            console.log(this.user);
            history.push('/user-profile')
        } catch (error) {
            alert("Wrong Email or Password");

        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt')
        this.user = null;
        history.push('/');
    }


    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);

        } catch (error) {
            console.log(error);
        }
    }

    registerUser = async (firstName, lastName, userName, email, password) => {
        try {
            var creds = { firstName, lastName, userName, email, password, };
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user)
            console.log(this.user);
            var streamcreds = { title: `${user.userName}'s livestream`, description: "No description yet", userId: user.id }
            console.log(streamcreds);
            const stream = await agent.Streams.create(streamcreds);
            runInAction(() => this.stream = stream);
            history.push('/user-profile')
        } catch (error) {
            throw error;
        }
    }

    updateUser = async (creds) => {
        try {
            const user = await agent.Account.Update(creds);
            runInAction(() => this.user = user);
        } catch (error) {

        }

    }
}