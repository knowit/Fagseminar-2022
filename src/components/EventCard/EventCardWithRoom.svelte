<script lang="ts">
  import type { TimeRecord } from "../../models/airtable";
  import { getImageUrl, getNiceType, getRoomName } from "../../util/util";

  export let data: TimeRecord;

  export let className: String;
</script>

<article class={` ${className}`}>
  <div class="w-full">
    <slot name="favorite" />
  </div>
  <a href={"/Fagseminar-2022/slot/" + data.id}>
    <figure class="flex items-center my-1 gap-x-3">
      <span class="circle-image">
        <img
          src={`/Fagseminar-2022/pictures/${getImageUrl(data)}`}
          alt=""
          class="max-w-sm w-40"
        />
      </span>
      <figcaption class="font-bold text-sm">
        {data.fields.userIds != null ? data.fields.userIds : ""}
      </figcaption>
    </figure>
    <p class="text-ellipsis mb-1">
      {data.fields.title}
    </p>
    <footer>
      <em class="text-kleather not-italic block"
        >{getNiceType(data.fields.type)}</em
      >
      <em class="text-kleather not-italic block"
        >{getRoomName(data.fields.room)}</em
      >
    </footer>
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
