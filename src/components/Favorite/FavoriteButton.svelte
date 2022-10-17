<script lang="ts">
  import ICO_Heart_Selected from "~icons/knowit-icons/ICO_Heart_Selected";
  import ICO_Heart_Unselected from "~icons/knowit-icons/ICO_Heart_Unselected";

  import type { TimeRecord } from "../../models/airtable";
  import { favorites } from "../../stores/favoriteStore";

  export let data: TimeRecord;

  function handleClick() {
    if (favorite) {
      favorites.set($favorites.filter((value) => value !== data.id));
    } else {
      favorites.set([...$favorites, data.id]);
    }
  }

  $: favorite = data != null ? $favorites.includes(data.id) : false;
</script>

<button on:click={handleClick} class=" w-full h-full">
  {#if favorite}
    <ICO_Heart_Selected width="100%" height="100%" />
  {:else}<ICO_Heart_Unselected width="100%" height="100%" />{/if}
</button>
