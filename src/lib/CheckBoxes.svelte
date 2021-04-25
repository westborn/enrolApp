<script>
  let courses = [
    'Apple Questions on the Fly',
    'Book Chat',
    'Bush n birds(Monday)',
    'Bush n birds(Thursday)',
    'Demystifying Apple Technology',
    'First Friday Film and Lunch',
    'Into Africa',
    "Jus' Talkin' Bout Things",
    'Linguistics',
    'Medieval Architecture Impossible',
    'Mindfulness Meditation',
    'Sculpture Bermagui Guided Tour',
    'Stitchers and Crafters',
    'Taboo Topics',
    'Tasmanian writers - a beginning Session 1',
    'Tasmanian writers - a beginning Session 2',
    'The Art of Kissing Kitty',
    "The Queen's Gambit and other chess secrets",
    'The Secret to Catching Trout',
    'The Ukraine',
    'Tour of Kamalashila Tibetan Buddhist Centre',
    'Ukulele',
    "Whitlam's Women",
  ]

  // Variables
  let cols = 3
  let checkedCourses = []

  let innerW
  let innerH
  let outerW
  let outerH
  let scrollX
  let scrollY

  //Reactive
  $: dispColumns = columns()

  // $: screenSize = screenIs()

  //Functions

  function columns() {
    let columns = []
    let mid = Math.ceil(courses.length / cols)
    for (let col = 0; col < cols; col++) {
      columns.push(courses.slice(col * mid, col * mid + mid))
    }
    return columns
  }

  function doClear() {
    checkedCourses = []
  }

  function doSubmit() {
    console.log('submitting')
    console.log(`Selected: ${checkedCourses.join(',')}`)
    doClear()
  }

  /**
   * Take the google.script.run function and promisify it.
   * @see https://sites.google.com/a/mcpher.com/share/Home/excelquirks/gassnips/googlescriptruntidy
   *
   * @param  {any} func - [ '{String} functionName', args for the function,,,,,]
   *
   */
  // function scriptRunRemote(func) {
  //   // this is a trick to convert the arguments array into an array, and drop the first one
  //   var runArgs = Array.prototype.slice.call(arguments).slice(1)

  //   // if we're running on localhost then mock the data returned
  //   return new Promise(function (resolve, reject) {
  //     google.script.run
  //       .withSuccessHandler(function (result) {
  //         resolve(JSON.parse(result))
  //       })
  //       .withFailureHandler(function (error) {
  //         reject(error)
  //       })
  //       [func].apply(this, runArgs)
  //   })
  // }

  // emails = {
  //     'M-0001': 'dpadams@gmail.com',
  //     'M-0002': 'tavira@gmail.com',
  //     'M-0003': 'salford52@gmail.com',
  //     'M-0004': '',
  //     'M-0005': '',
  //     'M-0006': 'mandy-anderson@bigpond.com',
  //     'M-0007': 'p@tricia.id.au',
  //     'M-0008': 'graham@grahamandrews.com',
  //     'M-0009': 'graham@grahamandrews.com',
  //     'M-0010': 'brangus645@gmail.com',
  //     'M-0011': 'applebyapps5@westnet.com.au',
  //     'M-0012': 'varmstrong@vtown.com.au',
  //     'M-0013': 'zenajarmstrong@gmail.com',
  //     'M-0014': 'janorrob@bigpond.com',
  //     'M-0015': 'figtree@pmatkinson.com.au',
  //     'M-0016': 'janorrob@bigpond.com',
  //     'M-0017': 'crbfm@ozemail.com.au',
  //     'M-0018': 'crbfm@ozemail.com.au',
  //     'M-0019': 'lynian512@bigpond.com',
  //     'M-0020': 'shedinalane@gmail.com',
  //     'M-0021': 'sharyn2190@hotmail.com',
  //     'M-0022': 'phil.baldwin51@gmail.com',
  //     'M-0023': 'k.jballard@bigpond.com',
  //   }
</script>

<div class="container pt-8 mx-auto ">
  <div class="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each courses as course, index (course)}
      <div class="w-full truncate select-none ">
        <input type="checkbox" id={`box-${index}`} value={course} bind:group={checkedCourses} />
        <label class="px-1" for={`box-${index}`}>{course}</label>
      </div>
    {/each}
  </div>
  <button
    on:click={doSubmit}
    class="px-4 py-2 mt-4 mr-6 font-bold text-green-800 bg-green-200 rounded focus:outline-none hover:bg-green-400"
  >
    Submit
  </button>
  <button
    on:click={doClear}
    class="px-4 py-2 mt-4 font-bold text-gray-800 bg-gray-200 rounded focus:outline-none hover:bg-gray-400"
    >Clear checked</button
  >
</div>
