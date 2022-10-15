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

<div class="space-x-1 flex justify-between items-center">
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
  <div class="icon align-middle">
    <button on:click={handleClick} class="w-10 h-10 m-auto z-50">
      {#if favorite}
        <ICO_Heart_Selected width="100%" height="100%" />
      {:else}<ICO_Heart_Unselected width="100%" height="100%" />{/if}
    </button>
  </div>
</div>

<style>
  @media (max-width: 768px) {
    .icon {
      width: 2.5rem;
      height: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }

    strong {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    .icon {
      width: 2rem;
      height: 2rem;
    }
  }
</style>
