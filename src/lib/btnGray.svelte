<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button
  class="inline-block px-5 py-3 text-sm font-semibold tracking-wider capitalize rounded-lg focus:ring focus:ring-offset-2 sm:text-base focus:outline-none text-gray-800 bg-gray-300 hover:bg-gray-200 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-400"
  on:click={increment}
>
  Clicks: {count}
</button>
