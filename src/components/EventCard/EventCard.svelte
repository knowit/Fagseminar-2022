<script lang="ts">
  import type { TimeRecord } from "../../models/airtable";
  import { getImageUrl, getNiceType } from "../../util/util";

  export let data: TimeRecord;

  export let className: String;
</script>

<article class={`${className}`}>
  <div class="w-full ">
    <slot name="favorite" />
  </div>
  <a href={"/slot/" + data.id}>
    <figure class="my-1 flex items-center gap-x-2">
      <span class="circle-image">
        <img
          src={`/pictures/${getImageUrl(data)}`}
          alt=""
          class="max-w-sm w-40"
        />
      </span>
      <figcaption class="font-bold">
        {data.fields.userIds != null ? data.fields.userIds : ""}
      </figcaption>
    </figure>
    <p class="text-clip mb-1">
      {data.fields.title.length >= 80
        ? data.fields.title.substring(0, 80) + "..."
        : data.fields.title}
    </p>
    <em class="text-kleather not-italic">{getNiceType(data.fields.type)}</em>
  </a>
</article>

<style>
  @media (max-width: 768px) {
    figcaption {
      font-size: large;
    }

    p {
      font-size: large;
    }
  }

  .circle-image {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
  }

  .circle-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
