<script>
    import { user } from "../user";

    let username;
    let password;
</script>

<div class="Login">
    <label for="username">Username</label>
    <input name="username" bind:value={username} minlength="4" maxlength="10" />
    <label for="password">Password</label>
    <input
        name="password"
        bind:value={password}
        minlength="8"
        maxlength="256"
    />
</div>

<style lang="scss" module>
    .Login {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
