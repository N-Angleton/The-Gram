import React from "react";
import {createRoot} from 'react-dom/client';
import { login, logout, signup } from "./actions/session_actions";
import { Root } from "./components/root";
import { configureStore } from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root')
    const root = createRoot(rootElement)
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: { users: { [window.currentUser.id]: window.currentUser }},
            session: { id: window.currentUser.id },
            errors: {session: []}
        }
        store = configureStore(preloadedState)
        delete window.currentUser
    }
    else {store = configureStore() }

    window.getState = store.getState
    window.dispatch = store.dispatch
    window.login = login
    window.logout = logout
    window.signup = signup

    root.render(<Root store={store} />)
})