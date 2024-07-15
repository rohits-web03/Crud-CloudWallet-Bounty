<script lang="ts">
  import Table from "$lib/Table.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log("hello", data.applicants);

  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<Table applicants={data.applicants} />

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 pb-4 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <form method="POST" action="?/create">
    <div class="flex flex-col justify-center items-start -mx-3 mb-2">
      <div class="w-full px-3 mb-6 md:mb-4">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="grid-city"
        >
          Name
        </label>
        <input
          class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
          id="name"
          type="text"
          placeholder="Enter name"
          name="name"
        />
      </div>
      <div class="w-full px-3 mb-6 md:mb-2">
        <label
          class="block uppercase tracking-wide text-xs font-bold mb-2"
          for="grid-city"
        >
          Email
        </label>
        <input
          class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
          id="email"
          type="text"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Email
            </label>
          </div> -->
      <div class="w-full flex justify-end items-center pr-5">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-4 py-2 rounded-lg"
        >
          Create Applicant
        </button>
      </div>
    </div>
  </form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">Added new Applicant!</p>
  {/if}
</div>
