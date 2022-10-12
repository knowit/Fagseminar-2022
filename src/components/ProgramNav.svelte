<script lang="ts">
  export let style: string;
  import format from "date-fns/format/index.js";
  import en from "date-fns/locale/en-GB/index.js";

  const baseHrefLink = "/Fagseminar-2022/program/";

  function getClosestDate() {
    const dates = [new Date(2022, 9, 21), new Date(2022, 9, 23)];

    const today = new Date();

    if (dates.some((date) => date === today)) {
      return today;
    }

    const filteredDates = dates.filter((date) => date >= today);
    if (filteredDates.length === 0) {
      return dates.reduce((prev, current) => {
        return prev != null && prev < current ? current : prev;
      });
    }

    return filteredDates.reduce((prev, current) => {
      return prev > current ? current : prev;
    });
  }

  function getDayName(date: Date) {
    return format(date, "EEEE", {
      locale: en,
    }).toLowerCase();
  }
</script>

<a
  href={`/Fagseminar-2022/program/${getDayName(getClosestDate())}`}
  class={style}><slot /></a
>

<style>
</style>
