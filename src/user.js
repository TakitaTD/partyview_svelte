import GUN from 'gun';
import 'gun/sea'
import 'gun/axe'
import { writable } from 'svelte/store';

const db = GUN();

export const user = db.user().recall({ sessionStorage: true });

export const username = writable("");

user.get('alias').on(v => username.set(v));

db.on('auth', () => {
    (async () => {
        const alias = await user.get('alias');
        username.set(alias);

        console.log("Signed in as: ", alias);
    })();
})

export function signOut() {
    user.leave();
    username.set("");
}
export function logIn(username, password) {
    user.auth(username, password, err => console.log("Something fucked up lol", err));
}
export function signUp(username, password) {
    user.create(username, password, err => err ? console.log("Something fucked up lol", err) : login(username, password));
}