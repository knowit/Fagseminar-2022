<script lang="ts">
  import { validate_each_argument } from "svelte/internal";
  import type { TimeRecord } from "../models/airtable";
  import { groupBy } from "../util/groupUtil";
  import { formatDate } from "../util/localeUtil";
  import { uniqueFilter } from "../util/util";
  import TimeDividedListItem from "./TimeDividedListItem.svelte";

  export let slots: TimeRecord[];

  function divideByDate(slots: TimeRecord[]) {
    const daysDividedSlots = groupBy(slots, (value) => value.fields.date);

    return Object.keys(daysDividedSlots)
      .map((key) => {
        return { date: key, slots: daysDividedSlots[key] };
      })
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? -1 : 1));
  }

  function divideByStartTime(slots: TimeRecord[]) {
    const timeDivided = groupBy(slots, (slot) => slot.fields.start);
    return Object.keys(timeDivided)
      .map((key) => {
        return { start: key, slots: timeDivided[key] };
      })
      .sort((a, b) =>
        new Date(
          2022,
          9,
          21,
          Number(a.start.split(":")[0]),
          Number(a.start.split(":")[1])
        ) <
        new Date(
          2022,
          9,
          21,
          Number(b.start.split(":")[0]),
          Number(b.start.split(":")[1])
        )
          ? -1
          : 1
      );
  }

  const dividedSlots = divideByDate(slots).map((value) => {
    return { date: value.date, slots: divideByStartTime(value.slots) };
  });

  function firstLetterUppercase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
</script>

<ul>
  {#each dividedSlots as slot}
    <li class="dateslot">
      <h2 class="text-4xl font-bold text-kleather p-2">
        {firstLetterUppercase(formatDate(slot.date, "EEEE d."))}
      </h2>
      <ul class="timeslot p-2">
        {#each slot.slots as timeSlot}
          <TimeDividedListItem
            time={new Date(
              2022,
              9,
              21,
              Number(timeSlot.start.split(":")[0]),
              Number(timeSlot.start.split(":")[1])
            )}
            slots={timeSlot.slots}
          />
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style>
  .dateslot ul {
    @apply border-t-4 border-kleather;
  }

  .timeslot :global(li:not(:last-child)) {
    @apply border-b-2;
  }
</style>
