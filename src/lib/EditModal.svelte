<script lang="ts">
  export let showModal: boolean = false;
  interface User {
		id?:number;
		name?:string;
		email?:string;
		createdAt?:Date;
	}
  export let user: User = {};
  export let closeModal: ()=>void;

  let newName: string | undefined = '';
  let newEmail: string | undefined = '';

  function handleSubmit(event: Event): void {
    closeModal(); 
  }

  function handleNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    user.name = input.value;
  }

  function handleEmailInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    user.email = input.value;
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
                <div class="mb-4 space-y-2">
                    <label for="name" class="block text-sm font-medium">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white" 
                        on:input={handleNameInput}
                        bind:value={newName} 
                        required
                    />
                </div>
                <div class="mb-4 space-y-2">
                    <label for="email" class="block text-sm font-medium">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white" 
                        on:input={handleEmailInput}    
                        bind:value={newEmail} 
                        required
                    />
                </div>
                <div class="mt-6">
                    <button 
                        type="submit" 
                        class="inline-block w-full py-2 px-4 border border-transparent rounded-md 
                        shadow-sm text-white bg-blue-600 hover:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}