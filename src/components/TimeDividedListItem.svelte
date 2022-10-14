<script lang="ts">
  import type { TimeRecord } from "../models/airtable";
  import { formatDate } from "../util/localeUtil";
  import { getImageUrl, getNiceType, getRoomName } from "../util/util";
  import EventCardHeader from "./EventCard/EventCardHeader.svelte";
  import EventCardWithRoom from "./EventCard/EventCardWithRoom.svelte";

  export let slots: TimeRecord[];

  export let time: Date;
</script>

<div>
  <h3 class="timeHeader text-2xl w-full font-bold pb-2">
    <time>{formatDate(time, "HH:mm")}</time>
  </h3>
  <ul class="timeList flex flex-row w-full flex-wrap justify-around px-4 ">
    {#each slots as slot}
      <li class="event w-full xl:w-1/4 min-w-min px-2 ">
        <EventCardWithRoom bind:data={slot} className="">
          <EventCardHeader slot="favorite" bind:data={slot} />
        </EventCardWithRoom>
      </li>
    {/each}
  </ul>
</div>

<style>
  @media (max-width: 768px) {
    .event {
      max-width: 30rem;
      width: 100%;
    }
    .timeList {
      row-gap: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .event {
      width: 50%;
    }
    .timeList {
      row-gap: 2.5rem;
    }
  }

  @media (min-width: 1280px) {
    .event {
      width: 25%;
    }
    .timeList {
      row-gap: 2.5rem;
    }
  }
</style>
