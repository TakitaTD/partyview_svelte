<script>
    export let top;
</script>

<header class="Header" style={top && "position: absolute; top: " + top}>
    <slot />
</header>

<style lang="scss" module>
    .Header {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        padding: 0;
        font-size: 4rem;
        font-family: "Rubik", sans-serif;
    }
</style>
