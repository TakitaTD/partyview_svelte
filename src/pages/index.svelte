<script>
    import { url } from "@roxi/routify";
    import { username } from "../user";
    import LoggedIn from "../component/LoggedIn.svelte";
    import LoggedOut from "../component/LoggedOut.svelte";
</script>

<div class="App">
    {#if $username}
        <LoggedIn />
    {:else}
        <LoggedOut />
    {/if}
</div>

<style lang="scss" module>
    .App {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>
