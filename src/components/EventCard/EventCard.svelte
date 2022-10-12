<script lang="ts">
  export let props: {
    id: string;
    title: string;
    href: string;
    time: string;
    duration: string;
    userName: string;
    className: string;
    image: string;
    type: string;
  };

  const { id, href, title, userName, time, duration, className, image, type } =
    props;
</script>

<article class={`${className}`}>
  <div class="w-full ">
    <slot name="favorite" />
  </div>
  <a {href}>
    <figure class="flex items-center">
      <div
        class="rounded-full relative inline-block w-10 h-10 overflow-hidden align-middle"
      >
        <img
          class="w-10 h-full max-w-xl min-h-full"
          src={`/Fagseminar-2022/pictures/${image}`}
          alt=""
        />
      </div>
      <figcaption class="font-bold text-sm">
        {userName}
      </figcaption>
    </figure>
    <p class="text-ellipsis ">
      {title}
    </p>
    <em class="text-kleather not-italic">{type}</em>
  </a>
</article>

<style>
</style>
