import { makeAutoObservable, reaction } from "mobx";

export default class CommonStore {

    token = window.localStorage.getItem('jwt');
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        //persisting the login data
        reaction(
            () => this.token, //what we are reacting to
            token => {
                if (token) {
                    window.localStorage.setItem('jwt', token)
                } else {
                    window.localStorage.removeItem('jwt')
                }
            }
        )
    }

    setToken = (token) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }

}