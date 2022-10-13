<script lang="ts">
  import type { TimeRecord } from "../../models/airtable";
  import { getImageUrl, getNiceType } from "../../util/util";
  import EventCard from "../EventCard/EventCard.svelte";
  import EventCardHeader from "../EventCard/EventCardHeader.svelte";
  import TimeDividedList from "../TimeDividedList.svelte";
  import FavoriteButton from "./FavoriteButton.svelte";

  export let data: TimeRecord[];

  const keys: string[] = [];

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (key != null) {
      keys.push(key);
    }
  }

  const favorites: TimeRecord[] = data.filter((value) =>
    keys.includes(value.id)
  );
</script>

<section>
  <TimeDividedList slots={favorites} />
</section>

<style></style>
