<script>
    export let form;
</script>
  
<div class="flex flex-col justify-center items-center mt-4 px-8">
    <div
        class="mt-8 pt-10 w-full max-w-xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
    >
    <h1 class="text-xl mb-4 font-bold">Check Balance</h1>
        <form method="post" action="?/login">
            <div class="-mx-3 mb-2">
                <div class="w-full px-3 mb-6">
                    <label
                        class="block uppercase tracking-wide text-xs font-bold mb-2"
                        for="email-balance"
                    >
                        Email
                    </label>
                    <input
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
                        id="email-balance"
                        type="text"
                        placeholder="Enter email"
                        name="email"
                    />
                </div>
                <div class="w-full px-3">
                    <label
                        class="block uppercase tracking-wide text-xs font-bold mb-2"
                        for="password-balance"
                    >
                        Password
                    </label>
                    <input
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
                        id="password-balance"
                        type="password"
                        placeholder="Enter password"
                        name="password"
                    />
                </div>
                <div class="w-full flex justify-end items-center pt-2 pr-5">
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 ml-3 px-5 py-2 rounded"
                    >
                        Login
                    </button>
                </div>
            </div>
        </form>
        {#if form?.auth}
            <p class="text-lg text-center pt-2 font-semibold text-green-600">
                Successfully Logged In. Your balance is {form?.balance}!
            </p>
        {:else if form?.auth===false}
            <p class="text-lg text-center pt-2 font-semibold text-red-600">
                 Log In Failed.
            </p>
        {/if}
    </div>
    <div
        class="mt-10 pt-10 w-full max-w-xl p-5 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
    >
    <h1 class="text-xl mb-4 font-bold">Pay</h1>
        <form method="POST" action="?/pay">
            <div class="w-full flex flex-col -mx-3 mb-2">
                <div class="w-full px-3 mb-6 md:mb-4">
                    <label
                        class="block uppercase tracking-wide text-xs font-bold mb-2"
                        for="email"
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
                <div class="w-full px-3 mb-6 md:mb-4">
                    <label
                        class="block uppercase tracking-wide text-xs font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        name="password"
                    />
                </div>

                <div class="w-full px-3 mb-6 md:mb-4">
                    <label
                        class="block uppercase tracking-wide text-xs font-bold mb-2"
                        for="paymail"
                    >
                        Paymail
                    </label>
                    <input
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
                        id="paymail"
                        type="text"
                        placeholder="Enter paymail"
                        name="paymail"
                    />
                </div>
                <div class="w-full px-3 mb-6 md:mb-4">
                    <label
                        class="block uppercase tracking-wide text-xs font-bold mb-2"
                        for="grid-city"
                    >
                        Amount
                    </label>
                    <input
                        class="appearance-none block w-full bg-neutral-700 border-b border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-b focus:border-white"
                        id="amount"
                        type="number"
                        placeholder="Enter amount"
                        name="amount"
                    />
                </div>
                <div class="w-full flex justify-end items-center pt-2 pr-5">
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 py-2 px-8 rounded"
                    >
                        Pay
                    </button>
                </div>
            </div>
        </form>
        {#if form?.success}
        <p class="font-semibold text-green-600 mt-10">
            The payment was successfull, <a target="_blank" class="text-indigo-500 font-semibold underline" href={`https://whatsonchain.com/tx/${form?.payResponse}`}
            >Transaction link</a
            >
        </p>
        {:else if form?.success === false} 
        <p class="font-semibold text-red-600 mt-10">
            {form?.payResponse}
        </p>
        {/if}
    </div>
</div>