<script>
  import { count, cart } from "$lib/old-stores";
</script>

<button onclick={() => ($count += 1)}>Increment {$count}</button>

<button onclick={() => ($cart = [...$cart, "🍎"])}
  >Add 🍎 = {JSON.stringify($cart)} ({$cart.length})</button
>

<br />
<br />
<button
  onclick={() => {
    $count = 0;
    $cart = [];
  }}>Clear all</button
>
