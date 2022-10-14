<script lang="ts">
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

  $: dividedSlots = divideByDate(slots).map((value) => {
    console.log(slots);
    console.log(value);
    return { date: value.date, slots: divideByStartTime(value.slots) };
  });

  function firstLetterUppercase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
</script>

<ul class="w-full">
  {#each dividedSlots as slot}
    <li class="dateslot w-full">
      <h2
        class="text-4xl font-bold text-kleather p-2 sticky top-[3.2rem] md:top-[4rem] z-10 w-full bg-ksand border-b-4 border-kleather"
      >
        {firstLetterUppercase(formatDate(slot.date, "EEEE d."))}
      </h2>
      <ul class="timeslot">
        {#each slot.slots as timeSlot, index}
          <li
            class={`w-full px-2 py-3 ${
              index != 0 ? "border-t-2 border-t-kblack" : ""
            }`}
          >
            <TimeDividedListItem
              time={new Date(
                2022,
                9,
                21,
                Number(timeSlot.start.split(":")[0]),
                Number(timeSlot.start.split(":")[1])
              )}
              bind:slots={timeSlot.slots}
            />
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

<style>
</style>
