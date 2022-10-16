<script lang="ts">
  import { onDestroy } from "svelte";
  import type { TimeRecord } from "../../models/airtable";

  import TimeDividedList from "../TimeDividedList.svelte";

  import { favorites } from "../../stores/favoriteStore";

  export let data: TimeRecord[];

  let dataFavorites: TimeRecord[];

  const unsubscribe = favorites.subscribe((value) => {
    dataFavorites = data.filter((data) => value.includes(data.id));
  });

  onDestroy(unsubscribe);
</script>

<section>
  {#if dataFavorites != null && dataFavorites.length !== 0}
    <TimeDividedList bind:slots={dataFavorites} />
  {:else}
    <p class=" text-center text-xl">
      Det virker som at du ikke har valgt noen favoritter enda
    </p>
  {/if}
</section>

<style></style>
