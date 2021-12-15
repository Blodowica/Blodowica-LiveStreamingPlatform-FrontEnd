import { makeAutoObservable, runInAction } from "mobx";
import { history } from "..";

import agent from "../API/ApiRequestAgent";
import { store } from "./store";



export default class UserStore {
    user = {};
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
            history.push('/user-profile')
        } catch (error) {
            throw error;
        }
    }
}