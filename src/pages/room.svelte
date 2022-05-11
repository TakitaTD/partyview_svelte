<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    const params = writable("");
    onMount(() => {
        params.set(
            new URLSearchParams(window.location.search).get("id") == null
                ? "404"
                : new URLSearchParams(window.location.search).get("id")
        );
    });
</script>

<div>Room Name: {$params == "404" ? "none" : $params}</div>

<style lang="scss">
</style>
