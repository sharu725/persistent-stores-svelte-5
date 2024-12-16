// export const count = $state({ value: 0 });
// export const cart = $state([]);

import { LocalStorage } from "./storage.svelte";

export const count = new LocalStorage("count", { value: 0 });
export const cart = new LocalStorage("cart", []);
