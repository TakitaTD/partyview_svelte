<script>
    import Header from "./components/Header.svelte";
    import CircularBar from "./components/CircularBar.svelte";
</script>

<div class="App">
    <Header top={"15%"}>Party<span style="color: #FF4444">View</span></Header>
</div>

<style lang="scss" module>
    .App {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
</style>
