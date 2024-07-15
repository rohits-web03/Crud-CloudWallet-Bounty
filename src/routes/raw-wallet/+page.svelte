<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'
    
    let WIF:string
    let address:string
    
    function createKeys () {
    
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key WIF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)
    }
    
</script>
    
<section class="flex flex-col justify-center items-center gap-4 w-full">
    <div class="mt-20">
        <button class="bg-blue-500 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-lg mx-auto" on:click={createKeys}> Generate New Wallet Keys </button>
    </div>
    {#if WIF}
        <p class="text-lg">Private Key WIF format is {WIF}</p>
    {/if}
    {#if address}
        <p class="text-lg">Your BitCoin Address is {address}</p>
    {/if}
</section>
    
    