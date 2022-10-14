<script lang="ts">
  import Icon from "@iconify/svelte";

  export let props: {
    id: string;
    time: string;
    duration: string;
    href?: string;
  };

  function handleClick() {
    if (favorite) {
      favorite = false;
      localStorage.removeItem(id);
    } else {
      favorite = true;
      localStorage.setItem(id, "true");
    }
  }

  const { id, time, duration } = props;

  let favorite = localStorage.getItem(id) === "true";
</script>

<div class="space-x-1 flex justify-between items-center">
  <strong class="text-lg"
    >{time.replaceAll(":", ".").replace("-", " - ")}</strong
  >
  <p class={`font-bold ${favorite ? "text-klollipop" : "text-defaultGray"} `}>
    {duration} MIN
  </p>
  <div class="w-6 h-6">
    <button on:click={handleClick} class=" m-auto">
      {#if favorite}
        <Icon icon="bi:suit-heart-fill" color="#FF00FF" />
      {:else}
        <Icon icon="bi:suit-heart-fill" color="#828282" />
      {/if}
    </button>
  </div>
</div>

<style>
</style>
