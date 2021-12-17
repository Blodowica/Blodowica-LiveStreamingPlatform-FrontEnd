import { createContext, useContext } from "react"
import CommonStore from "./CommonStore";
import UserStore from "./UserStore";


export const store = {
    userStore: new UserStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}