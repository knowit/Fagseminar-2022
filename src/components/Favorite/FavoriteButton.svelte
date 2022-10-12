<script lang="ts">
  export let id: string;

  let favorite = localStorage.getItem(id) === "true";

  function handleClick() {
    if (favorite) {
      favorite = false;
      localStorage.removeItem(id);
    } else {
      favorite = true;
      localStorage.setItem(id, "true");
    }
  }
</script>

<div>
  <button
    on:click={handleClick}
    class={favorite ? "favorite" : "not-favorite"}
  />
</div>

<style>
  div {
    display: block;
    height: 50px;
    width: 50px;
  }

  .not-favorite,
  .favorite {
    position: relative;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .favorite:before,
  .favorite:after,
  .not-favorite:before,
  .not-favorite:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
  }
  .not-favorite:before,
  .favorite:before {
    bottom: 0px;
    left: 75%;
  }
  .favorite:after,
  .not-favorite:after {
    top: 75%;
    right: 0px;
  }

  .favorite,
  .favorite:before,
  .favorite:after {
    background-color: #ff00ff;
  }

  .not-favorite,
  .not-favorite:before,
  .not-favorite:after {
    border-color: #828282;
    background-color: #828282;
  }
</style>
