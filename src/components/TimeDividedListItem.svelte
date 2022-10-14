<script lang="ts">
  import type { TimeRecord } from "../models/airtable";
  import { formatDate } from "../util/localeUtil";
  import { getImageUrl, getNiceType, getRoomName } from "../util/util";
  import EventCardHeader from "./EventCard/EventCardHeader.svelte";
  import EventCardWithRoom from "./EventCard/EventCardWithRoom.svelte";

  export let slots: TimeRecord[];

  export let time: Date;
</script>

<li class="w-full">
  <h3><time>{formatDate(time, "HH:mm")}</time></h3>
  <ul class="flex w-full flex-wrap justify-around">
    {#each slots as slot}
      <EventCardWithRoom
        props={{
          id: slot.id,
          userName: slot.fields.userIds ?? "",
          time: slot.fields.start + "-" + slot.fields.end,
          title: slot.fields.title,
          duration: slot.fields.duration?.toString(),
          href: "/Fagseminar-2022/slot/" + slot.id,
          className: "h-full w-1/4 px-4",
          image: getImageUrl(slot),
          type: getNiceType(slot.fields.type),
          room: getRoomName(slot.fields.room),
        }}
      >
        <EventCardHeader
          slot="favorite"
          props={{
            duration: slot.fields.duration?.toString(),
            id: slot.id,
            time: slot.fields.start + "-" + slot.fields.end,
          }}
        />
      </EventCardWithRoom>
    {/each}
  </ul>
</li>

<style></style>
