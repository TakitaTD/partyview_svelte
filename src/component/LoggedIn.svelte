<script>
    import { user, username, signOut } from "../user";
</script>

<div>
    <header>
        Welcome back, {$username}
    </header>
    <button on:click={signOut}>Sign out</button>
</div>
