<script>
  import ButtonPrimary from './lib/btnPrimary.svelte'
  import ButtonSecondary from './lib/btnSecondary.svelte'
  import ButtonGray from './lib/btnGray.svelte'
  import CheckBoxes from './lib/CheckBoxes.svelte'
  import TailwindCSS from './TailwindCSS.svelte'
</script>

<TailwindCSS />

<main>
  <div class="container items-center px-3 py-40 mx-auto ">
    <p class="uppercase tracking-loose text-secondary-base">Ready to Start with Svelte, Tailwind and Clasp?</p>
    <h1 class="my-4 text-5xl font-bold leading-tight text-primary-600">Here you go then!</h1>
    <p class="mb-8 text-2xl leading-normal">Lots of changes you can make here to look good!</p>
    <div class="my-4">
      <ButtonPrimary />
      <ButtonSecondary />
      <ButtonGray />
      <CheckBoxes />
    </div>
  </div>
</main>
