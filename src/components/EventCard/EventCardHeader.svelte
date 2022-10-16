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

<div class="space-x-1 flex justify-between items-center h-10">
  <a href={"/Fagseminar-2022/slot/" + data.id}
    ><strong class="text-lg"
      >{(data.fields.start + " - " + data.fields.end).replaceAll(
        ":",
        "."
      )}</strong
    ></a
  >
  <a href={"/Fagseminar-2022/slot/" + data.id}
    ><p
      class={`font-bold ${favorite ? "text-klollipop" : "text-defaultGray"} `}
    >
      {data.fields.duration} MIN
    </p></a
  >
  <div class=" w-8 h-8 lg:w-10 lg:h-10">
    <button on:click={handleClick} class="w-8 h-8 lg:w-10 lg:h-10">
      {#if favorite}
        <ICO_Heart_Selected width="100%" height="100%" />
      {:else}<ICO_Heart_Unselected width="100%" height="100%" />{/if}
    </button>
  </div>
</div>

<style>
  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }

    strong {
      font-size: 1.2rem;
    }
  }
</style>
