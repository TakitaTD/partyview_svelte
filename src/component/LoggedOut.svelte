<script>
    import { user } from "../user";

    let username;
    let password;

    function logIn() {
        user.auth(username, password, ({ err }) => err && console.error(err));
    }
    function signUp() {
        user.create(username, password, ({ err }) => {
            if (err) {
                console.error(err);
            } else {
                logIn();
            }
        });
    }
</script>

<div class="Login">
    <label for="username">Username</label>
    <input name="username" bind:value={username} minlength="4" maxlength="10" />
    <label for="password">Password</label>
    <input
        name="password"
        type="password"
        bind:value={password}
        minlength="8"
        maxlength="256"
    />
    <button on:click={signUp}>Sign Up</button>
    <button on:click={logIn}>Log In</button>
</div>

<style lang="scss" module>
    .Login {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 30%;
        label {
            color: #fff;
            font-size: 2rem;
            font-family: "Alata", sans-serif;
        }
        input {
            border-radius: 5rem;
            outline: none;
            border: none;
            box-sizing: border-box;
            margin-bottom: 2rem;
            margin-top: 1rem;
            height: 1.5rem;
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
            font-family: "Rubik", sans-serif;
            background-color: rgb(255, 68, 68);
            transition: all 0.3s;
            text-align: center;
        }
        input:hover {
            background-color: rgb(32, 213, 135);
        }
        button {
            display: flex;
            text-align: center;
            min-width: 10rem;
            margin-top: 1rem;
            min-height: 3rem;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            outline: none;
            border: none;
            background-color: rgba(255, 255, 255, 0.05);
            color: #fff;
            font-family: "Rubik", sans-serif;
            border-radius: 0.1rem;
            cursor: pointer;
            transition: all 0.2s;
        }
        button:hover {
            background-color: rgba(255, 255, 255, 0.02);
        }
    }
</style>
