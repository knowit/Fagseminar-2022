<script lang="ts">
  export let props: {
    id: string;
    time: string;
    duration: string;
  };

  function handleClick() {
    if (favorite) {
      favorite = false;
      localStorage.removeItem(id);
    } else {
      favorite = true;
      localStorage.setItem(id, "true");
    }
  }

  const { id, time, duration } = props;

  let favorite = localStorage.getItem(id) === "true";
</script>

<div class="space-x-1 flex justify-between items-center ">
  <strong class="text-lg"
    >{time.replaceAll(":", ".").replace("-", " - ")}</strong
  >
  <p class={`font-bold ${favorite ? "text-klollipop" : "text-defaultGray"} `}>
    {duration} MIN
  </p>
  <div class="w-5 h-5">
    <button on:click={handleClick} class=" m-auto"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        fill={favorite ? "#FF00FF" : "#828282"}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={favorite ? "#FF00FF" : "#828282"}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  </div>
</div>

<style>
</style>
