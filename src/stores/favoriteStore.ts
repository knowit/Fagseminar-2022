import { writable } from "svelte/store";

export const favorites = writable<string[]>(
  JSON.parse(localStorage.getItem("favorites") || "[]")
);
favorites.subscribe(
  (value) => (localStorage.favorites = JSON.stringify(value))
);
