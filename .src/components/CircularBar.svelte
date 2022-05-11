<script>
    export let top, left;
</script>

<div style={"top: " + top + "; left: " + left} />

<style module lang="scss">
    div {
        height: 8rem;
        width: 3rem;
        transform: rotateZ(45deg);
        background-color: #ff4444;
        border-radius: 10rem;
        position: absolute;
    }
</style>
