<script>
  export let showModal = false;
  export let user = {};
  export let closeModal;

  let newName = '';
  let newEmail = '';

  function handleSubmit(event) {
      closeModal(); 
  }

  function handleNameInput(event) {
    user.name = event.target.value;
  }

  function handleEmailInput(event) {
    user.email = event.target.value;
  }

  $: {
    newName = user.name;
    newEmail = user.email;
  }
</script>

{#if showModal}
    <div class="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div class="relative bg-neutral-800 text-white w-full max-w-md p-6 rounded-lg shadow-xl">
            <div class="flex items-center justify-between mb-4">
                <p class="text-xl">Edit Modal</p>
                <button on:click={closeModal}>
                    <img class="w-6 float-right" src="./close.svg" alt="close modal"/>
                </button>
            </div>
            <form method="POST" action="?/update">
                <input type="hidden" name="id" id="id" value={user.id}>
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        class="mt-1 bg-neutral-700 block w-full border-gray-300 
                    rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 
                    focus:ring-opacity-50 px-4 py-2" 
                        on:input={handleNameInput}
                        bind:value={newName} 
                        required
                    />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        class="mt-1 bg-neutral-700 block w-full border-gray-300 
                    rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 
                    focus:ring-opacity-50 px-4 py-2" 
                        on:input={handleEmailInput}    
                        bind:value={newEmail} 
                        required
                    />
                </div>
                <div class="mt-6">
                    <button 
                        type="submit" 
                        class="inline-block w-full py-2 px-4 border border-transparent rounded-md 
                        shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}