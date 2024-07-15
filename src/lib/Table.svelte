<script lang="ts">
	export let applicants;

	import EditModal from './EditModal.svelte';

	let selectedUser = {};
	let showModal = false;

	function openEditModal(user: {
		id:number,
		name:string,
		email:string,
		createdAt:Date
	}) {
		console.log("Selected User:",user)
		selectedUser = user;
		showModal = true;
	}

	function closeModal() {
	showModal = false;
	}
	$: sortedApplicants = applicants.slice().sort((a: {
		id:number,
		name:string,
		email:string,
		createdAt:Date
	}, b: {
		id:number,
		name:string,
		email:string,
		createdAt:Date
	}) => a.id - b.id);
</script>


<div
	class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
	<div class="flex items-center justify-between mb-4">
		<div class="flex justify-between items-center w-full">
			<h2 class="text-xl font-semibold">List of Users</h2>
			<p class="text-base text-gray-500">
				Total: {applicants.length} users
			</p>
		</div>
	</div>
	<div class="divide-y divide-gray-900/5">
		{#each sortedApplicants as user (user.id)}
			<div class="w-full flex items-center justify-between py-3">
				<div class="flex items-center space-x-4">
					<div class="flex justify-between items-center gap-8">
						<p class="font-medium pt-1 leading-none">{user.name}</p>
						<p class="font-medium pl-5 text-gray-400 pt-0">{user.email}</p>                        
					</div>
				</div>
				<div class="flex justify-end items-center gap-4">
					<form method="POST" action="/profiles?/delete">
					<input type="hidden" name="id" id="id" value={user.id}>
					<button type="submit">
						<img class="w-6 float-right" src="./trash.svg" alt="delete"/>
					</button>
					</form>
					<button on:click={() => openEditModal(user)}>
						<img class="w-6 float-right" src="./edit.svg" alt="edit"/>
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>
<EditModal bind:showModal bind:user={selectedUser} {closeModal} />