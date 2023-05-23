import { writable } from 'svelte/store';

const USER = {
    login: false,
    username: '',
    password: ''
}

const ROOT = [
    {
        id: 0,
        name: "Home",
        files: [{ name: "dummy.txt" }]
    }
]

export const user = writable(USER);
export const root = writable(ROOT);
export const folderId = writable(0);