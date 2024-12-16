<script>
  import { count, cart } from "$lib/shared.svelte";

  $inspect(count.current);
</script>

<button onclick={() => (count.current.value += 1)}
  >Increment {count.current.value}</button
>

<button onclick={() => cart.current.push("🍎")}
  >Add 🍎 = {JSON.stringify(cart.current)} ({cart.current.length})</button
>

<br />
<br />
<button
  onclick={() => {
    count.current.value = 0;
    cart.current = [];
  }}>Clear all</button
>
