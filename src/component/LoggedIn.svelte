<script>
  import { onMount } from "svelte";
  import GUN from "gun";

  import { user, username } from "../user";
  let header;
  function signOut() {
    user.leave();
    username.set("");
  }
  const db = GUN();

  onMount(() => {
    header.style.opacity = 0;
    setTimeout(() => {
      header.style.opacity = 1;
    }, 500);
  });

  let newRoom;
  let rooms = [];
  function createRoom() {
    console.log(
      db.get("test3").get("fuck", function (ack) {
        console.log(ack.put);
      })
    );
  }
</script>

<div class="App">
  <header bind:this={header}>
    Welcome back, {$username}
  </header>
  <button class="SignOut" on:click={signOut}>Sign out</button>
  <div class="Rooms">
    <button on:click={createRoom}> Create room </button>
    <label for="join_room">Join room</label>
    <input type="text" placeholder="Join room" />
  </div>
</div>

<style lang="scss" module>
  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      color: #fff;
      font-family: "Rubik";
      position: absolute;
      top: 20%;
      transition: opacity 2s;
    }
    .SignOut {
      display: flex;
      position: absolute;
      outline: none;
      border: none;
      width: 5rem;
      height: 2rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1rem;
      font-family: "Rubik";
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
      border-radius: 0.1rem;
      top: 2.5%;
      right: 2.5%;
      cursor: pointer;
    }
    .SignOut:hover {
      transition: all 0.3s;
      background-color: rgba(255, 255, 255, 0.05);
    }
    .Rooms {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
    }
  }
</style>
