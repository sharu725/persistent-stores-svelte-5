<script>
  let { children } = $props();
</script>

<ul>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/a-page">A page</a>
  </li>
</ul>

{@render children()}
