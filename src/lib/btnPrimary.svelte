<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button
  class="inline-block px-5 py-3 text-sm font-semibold tracking-wider text-white capitalize rounded-lg focus:ring focus:ring-offset-2 sm:text-base focus:outline-none bg-primary-base hover:bg-primary-600 focus:ring-primary-500 focus:ring-opacity-50 active:bg-primary-600"
  on:click={increment}
>
  Clicks: {count}
</button>
